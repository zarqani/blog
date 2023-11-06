import { api } from "@/api";

const registerRoute = "/api/auth/register";
const loginRoute = "/api/auth/login";

export const registerApi = async (body: { [key: string]: any }) =>
  await api.post(registerRoute, body);

export const login = async (body: { [key: string]: any }) =>
  await api.post(loginRoute, body);
