"use client";

import { addPost, deletePost, editPost } from "@/api/posts";
import { useForm } from "@/hooks/useForm";
import { useRouter } from "next/navigation";
import { FormEvent } from "react";
import * as yup from "yup";
import Input from "../Input";
import Button from "../Button";

export default function PostForm({ id }) {
  const router = useRouter();
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
      author: yup.string().max(255).required("field is required."),
      title: yup.string().max(255).required("field is required."),
      content: yup.string().max(500).required("field is required."),
    }),
  });

  const onSubmit = async (values: Record<string, any>) => {
    console.log({ values });

    if (id) editPost(id, values);
    else
      await addPost(values).then((res) => {
        router.push("/posts");
      });
  };

  const handleDelete = async () => {
    await deletePost(id);
  };
  return (
    <form
      className="space-y-6"
      onSubmit={async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await handleSubmit(onSubmit);
      }}
    >
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Add Post
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            Please Complete The Form
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <Input
              name="author"
              label="Author"
              type="text"
              error={errors["author"]}
              {...register({ name: "author" })}
            />

            <Input
              name="title"
              label="Title"
              type="text"
              error={errors["title"]}
              {...register({ name: "title" })}
            />

            <Input
              name="content"
              label="Content"
              type="textarea"
              rows={3}
              defaultValue={""}
              error={errors["content"]}
              {...register({ name: "content" })}
            />
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <Button
          label="Cancel"
          type="button"
          variant="default"
          onClick={handleDelete}
        />
        <Button
          label="Delete"
          type="button"
          variant="default"
          onClick={handleDelete}
        />
        <Button
          label="Save"
          type="submit"
          disabled={!isValid || isSubmitting}
          loading={!!isSubmitting}
        />
      </div>
    </form>
  );
}
