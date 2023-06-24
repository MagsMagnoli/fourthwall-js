import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";
import { wrapper } from "axios-cookiejar-support";
import { CookieJar } from "tough-cookie";
import { OrdersResponse } from "../types/orders";
import { login } from "./login";

const baseUrl = "https://api.fourthwall.com/api/";

export class Fourthwall {
  private headers: Record<string, string> = {};
  client: AxiosInstance;

  constructor() {
    const jar = new CookieJar();
    this.client = wrapper(
      axios.create({
        withCredentials: true,
        jar,
      })
    );
  }

  async login({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Promise<void> {
    const accessToken = await login({
      client: this.client,
      username,
      password,
    });

    this.headers = {
      Authorization: `Bearer ${accessToken}`,
    };
  }

  async getOrders({
    filterOutGiveawayGifts = true,
    page = 0,
    size = 25,
  }: {
    filterOutGiveawayGifts?: boolean;
    page?: number;
    size?: number;
  }): Promise<OrdersResponse> {
    const response = await get<OrdersResponse>({
      client: this.client,
      headers: this.headers,
      url: `${baseUrl}orders?filterOutGiveawayGifts=${filterOutGiveawayGifts}&page=${page}&size=${size}`,
    });

    return response.data;
  }
}

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
