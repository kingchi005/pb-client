import axios, { AxiosResponse, AxiosError } from "axios";

export interface ApiResponse<T = any> {
  data: T;
  ok: boolean;
  message: string;
}

export interface ApiError {
  ok: boolean;
  error: {
    message: string;
  };
}

async function handleRequest<T>(
  requestFunction: () => Promise<AxiosResponse<ApiResponse<T>>>,
): Promise<T> {
  try {
    const response = await requestFunction();
    return response.data.data;
  } catch (error) {
    const axiosError = error as AxiosError<ApiError>;
    throw new Error(
      axiosError.response?.data?.error?.message || "An error occurred",
    );
  }
}

const adminClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/admin`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  // timeout: 2000,
  withCredentials: true,
});

const userClient = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export function adminGetRequest<T>(url: string): Promise<T> {
  return handleRequest(() => adminClient.get<ApiResponse<T>>(`/${url}`));
}

export function adminPostRequest<T, P>(url: string, payload: P): Promise<T> {
  return handleRequest(() =>
    adminClient.post<ApiResponse<T>>(`/${url}`, payload),
  );
}

export function userGetRequest<T>(url: string): Promise<T> {
  return handleRequest(() => userClient.get<ApiResponse<T>>(`/${url}`));
}
