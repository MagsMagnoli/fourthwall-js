import { AxiosError, AxiosInstance, AxiosResponse } from "axios";

export async function post<T, U>({
  client,
  url,
  data,
  headers,
}: {
  client: AxiosInstance;
  url: string;
  data: U;
  headers?: Record<string, string>;
}): Promise<AxiosResponse<T>> {
  try {
    return await client.post<T>(url, data, { headers });
  } catch (err) {
    const axiosError = err as AxiosError;
    if (axiosError && axiosError.response) {
      throw new Error(
        `Request failed with status code ${axiosError.response.status}`
      );
    } else {
      throw new Error("Request failed");
    }
  }
}

export async function get<T>({
  client,
  url,
  headers,
}: {
  client: AxiosInstance;
  url: string;
  headers?: Record<string, string>;
}): Promise<AxiosResponse<T>> {
  try {
    return await client.get<T>(url, { headers });
  } catch (err) {
    const axiosError = err as AxiosError;
    if (axiosError && axiosError.response) {
      throw new Error(
        `Request failed with status code ${axiosError.response.status}`
      );
    } else {
      throw new Error("Request failed");
    }
  }
}
