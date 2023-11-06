import { api } from "@/api";

const postsRoute = "/api/blog/getAll";
const addPostRout = "/api/blog/create";
const editPostRout = (id) => `/api/blog/${id}/edit`;
const deletePostRout = (id) => `/api/blog/${id}/delete`;

export const getPosts = async () => await api.get(postsRoute);

export const addPost = async (body: { [key: string]: any }) =>
  await api.post(addPostRout, body);

export const editPost = async (id, body: { [key: string]: any }) =>
  await api.put(editPostRout(id), body);

export const deletePost = async (id) => await api.delete(deletePostRout(id));
