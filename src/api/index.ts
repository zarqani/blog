export async function request({
  url,
  body,
  params,
  headers,
  method,
}: {
  url: string;
  params?: { [key: string]: any };
  body?: { [key: string]: any };
  headers?: any;
  method?: string;
}) {
  const token = localStorage.getItem("token");
  const requestOptions = {
    method,
    ...(body && { body: JSON.stringify(body) }),
    headers: {
      "Content-Type": "application/json",
      ...(token && { authorization: `Bearer ${token}` }),
      // authorization:
      //   "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiZDg0ZmE5OGYtNmJiYi00ODdiLWExMTItNzMwOTMxMzlkZGQxIiwiZW1haWwiOiJjY2NkLnJlemEuc3NmYTRmMnNzM21tQGdtYWlsLmNvbSIsImlhdCI6MTY5OTMwNDg4MSwiZXhwIjoxNjk5MzA4NDgxfQ.h0b2SJt3WGFO8CPsFNBJsg8LYMfJa7bJpBcI_xGPdAc",
      ...headers,
    },
  };

  const response = await fetch(
    `https://ffrhqp-3000.csb.app${url}`,
    requestOptions
  )
    .then((response) => response.json())
    .catch((error) => console.log("error", error));

  return response;
}

export const get = async (
  url: string,
  params?: { [key: string]: any },
  headers?: any
) => await request({ url, method: "GET", params, headers });

export const post = async (
  url: string,
  body?: { [key: string]: any },
  headers?: any
) => await request({ url, method: "POST", body, headers });

export const put = async (
  url: string,
  body?: { [key: string]: any },
  headers?: any
) => await request({ url, method: "PUT", body, headers });

export const deleteApi = async (url: string, headers?: any) =>
  await request({ url, method: "DELETE", headers });

export const api = {
  post,
  get,
  put,
  delete: deleteApi,
};
