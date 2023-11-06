import { InputHTMLAttributes, ReactNode, TextareaHTMLAttributes } from "react";

type InputProps = (TextareaHTMLAttributes<HTMLTextAreaElement> &
  InputHTMLAttributes<HTMLInputElement>) & {
  error?: string;
  label?: string | ReactNode;
  name: string;
  className?: string;
};

export default function Input({
  className,
  name,
  label,
  error,
  type,
  ...props
}: InputProps) {
  return (
    <div className="col-span-full">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        {type === "textarea" ? (
          <textarea
            id={name}
            name={name}
            rows={3}
            className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue={""}
            {...props}
          />
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            className={`${
              className || ""
            } block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6`}
            {...props}
          />
        )}
      </div>
      {error && <p className="mt-3 text-sm leading-6 text-gray-600">{error}</p>}
    </div>
  );
}
