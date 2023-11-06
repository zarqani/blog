import { ChangeEvent, useCallback, useEffect, useState } from "react";
import cloneDeep from "lodash/cloneDeep";
import debounce from "lodash/debounce";
import * as yup from "yup";

type ValidationSchema = yup.ObjectSchema<Record<string, any>> | null;

type FormFields = Record<string, any>;
interface FormProps {
  initialValues: FormFields;
  validationSchema: ValidationSchema;
}

type FormState = {
  errors: { [key: string]: any };
  isSubmitting: boolean;
  isValid: boolean;
};

type CallbackType = (values: FormFields) => Promise<void> | void;

type UseFormProps = {
  register: ({ name }: { name: string }) => {
    value: any;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  };
  getValues: () => FormFields;
  handleSubmit: (callback: CallbackType) => Promise<void>;
  reset: (params: FormFields) => void;
  setValue: (name: string, value: any) => void;
  formState: FormState;
};

export const useForm = ({
  initialValues,
  validationSchema,
}: FormProps): UseFormProps => {
  const [fieldValues, setFieldValues] = useState<FormFields>(initialValues);
  const [formState, SetFormState] = useState({
    errors: {},
    isSubmitting: false,
    isValid: false,
  });

  const validate = useCallback(
    debounce(async (values: Record<string, any>) => {
      if (validationSchema) {
        try {
          await validationSchema.validateSync(values, { abortEarly: false });
          SetFormState((prev) => ({ ...prev, isValid: true, errors: {} }));
        } catch (err) {
          const errors: Record<string, string> = {};
          if (err instanceof yup.ValidationError)
            err.inner.forEach((error: any) => {
              errors[error.path] = error.message;
            });
          if (errors)
            SetFormState((prev) => ({ ...prev, isValid: false, errors }));
        }
      }
    }, 200),
    [validationSchema]
  );

  const debounceOnChange = useCallback(
    debounce(
      (name, value) => setFieldValues((prev) => ({ ...prev, [name]: value })),
      100
    ),
    []
  );

  const register = ({ name }: { name: string }) => {
    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      debounceOnChange(name, value);
    };
    return { value: fieldValues[name], onChange };
  };

  const handleSubmit = async (callback: CallbackType) => {
    SetFormState((prev) => ({ ...prev, isSubmitting: true }));
    validate(fieldValues);
    if (!Object.keys(formState.errors).length)
      await callback(cloneDeep(fieldValues));
    SetFormState((prev) => ({ ...prev, isSubmitting: false }));
  };

  const reset = (params: FormFields) => {
    if (params) setFieldValues((prev) => ({ ...prev, ...params }));
    else
      setFieldValues((prev) => ({
        ...Object.keys(prev || {}).reduce(
          (fields, key) => ({ ...fields, [key]: null }),
          {}
        ),
      }));
  };

  const getValues = () => fieldValues;
  const setValue = (name: string, value: any) =>
    setFieldValues((prev) => ({ ...prev, [name]: value }));

  useEffect(() => {
    if (fieldValues) validate(fieldValues);
  }, [fieldValues]);

  return { register, getValues, handleSubmit, reset, setValue, formState };
};
