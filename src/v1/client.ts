import { GetOrdersResponse } from "./types";

export class Fourthwall {
  private headers: Record<string, string> = {};
  private baseUrl = "https://api.fourthwall.com/open-api/";

  constructor({
    username,
    password,
    version = "v1.0",
  }: {
    username: string;
    password: string;
    version?: string;
  }) {
    const combinedCredentials = `${username}:${password}`;
    const base64Credentials = btoa(combinedCredentials);

    this.headers = {
      Authorization: `Basic ${base64Credentials}`,
      "Content-Type": "application/json",
    };

    this.baseUrl = `${this.baseUrl}${version}/`;
  }

  async getOrders({
    page = 0,
    size = 20,
  }: {
    page?: number;
    size?: number;
  }): Promise<GetOrdersResponse> {
    const url = new URL(`${this.baseUrl}order`);
    url.searchParams.append("page", page.toString());
    url.searchParams.append("size", size.toString());

    const response = await fetch(url.toString(), {
      headers: this.headers,
    });

    if (!response.ok) {
      throw new Error(
        `Request failed with status code ${response.status} ${response.statusText}`
      );
    }

    return response.json();
  }
}
