import axios, { AxiosInstance } from "axios";
import { wrapper } from "axios-cookiejar-support";
import { CookieJar } from "tough-cookie";
import { OrdersResponse } from "../types/orders";
import { login } from "./login";
import { get } from "./requests";

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
        maxRedirects: 0,
        validateStatus: (status) => status >= 200 && status < 303,
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
  } = {}): Promise<OrdersResponse> {
    const response = await get<OrdersResponse>({
      client: this.client,
      headers: this.headers,
      url: `${baseUrl}orders?filterOutGiveawayGifts=${filterOutGiveawayGifts}&page=${page}&size=${size}`,
    });

    return response.data;
  }
}
