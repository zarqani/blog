"use client";

import { login, registerApi } from "@/api/auth";
import Input from "../Input";
import Button from "../Button";
import { FormEvent, useState } from "react";
import { useForm } from "@/hooks/useForm";
import * as yup from "yup";
import { useRouter } from "next/navigation";

export default function AuthForm() {
  const router = useRouter();
  const [isRegister, setIsRegister] = useState(false);
  const {
    formState: { isSubmitting, isValid, errors },
    register,
    handleSubmit,
  } = useForm({
    initialValues: {
      // username: "test",
      // email: "test@gmail.com",
      // password: "test",
    },
    validationSchema: yup.object().shape({
      ...(isRegister && {
        username: yup.string().max(255).required("field is required."),
      }),
      email: yup
        .string()
        .email("not a valid email")
        .max(255)
        .required("field is required."),
      password: yup.string().max(255).required("field is required."),
    }),
  });

  const onSubmit = async (values: Record<string, any>) => {
    console.log({ values });
    if (isRegister) await registerApi(values);
    else
      await login(values).then((res) => {
        localStorage.setItem("token", res.response);
        router.push("/");
      });
  };
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          {isRegister ? "Sign up" : "Sign in to your account"}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form
          className="space-y-6"
          onSubmit={async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            await handleSubmit(onSubmit);
          }}
        >
          {isRegister && (
            <Input
              name="username"
              label="Username"
              type="text"
              error={errors["username"]}
              {...register({ name: "username" })}
            />
          )}

          <Input
            name="email"
            label="Email address"
            type="email"
            autoComplete="off"
            error={errors["email"]}
            {...register({ name: "email" })}
          />

          <Input
            name="password"
            label={
              <div className="flex items-center justify-between">
                <span className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </span>
                <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div>
              </div>
            }
            type="password"
            autoComplete="off"
            error={errors["password"]}
            {...register({ name: "password" })}
          />

          <Button
            label="Confirm"
            type="submit"
            fullWidth
            disabled={!isValid || isSubmitting}
            loading={!!isSubmitting}
          />
          <Button
            label={isRegister ? "Sign in" : "Sign up"}
            type="button"
            variant="default"
            fullWidth
            onClick={() => setIsRegister((prev) => !prev)}
          />
        </form>
      </div>
    </div>
  );
}
