import axios, { AxiosInstance } from "axios";
import { wrapper } from "axios-cookiejar-support";
import { CookieJar } from "tough-cookie";
import {
  CreatorIntegrationsResponse,
  DashboardResponse,
  GiveawayContributionResponse,
  Shop,
  ShopsResponse,
} from "../types";
import { OrdersResponse } from "../types/orders";
import { login } from "./login";
import { get } from "./requests";

const baseUrl = "https://api.fourthwall.com/api/";

export class Fourthwall {
  private headers: Record<string, string> = {};
  client: AxiosInstance;

  /**
   * Create an instance of the Fourthwall API client.
   * @constructor
   */
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

  /**
   * Log in to the Fourthwall API and set the Authorization header for subsequent requests.
   * @async
   * @param {Object} param0 - Object containing username and password.
   * @param {string} param0.username - The username for the API.
   * @param {string} param0.password - The password for the API.
   * @throws {Error} Will throw an error if login fails.
   */
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

  /**
   * Fetch a list of connected shops from the Fourthwall API.
   * @async
   * @return {Promise<ShopsResponse>} Returns a promise that resolves with the data from the API.
   * @throws {Error} Will throw an error if the request fails.
   */
  async getShops(): Promise<ShopsResponse> {
    const response = await get<ShopsResponse>({
      client: this.client,
      headers: this.headers,
      url: `${baseUrl}shops/connected`,
    });

    return response.data;
  }

  /**
   * Fetch the current shop from the Fourthwall API.
   * @async
   * @return {Promise<Shop>} Returns a promise that resolves with the data from the API.
   * @throws {Error} Will throw an error if the request fails.
   */
  async getCurrentShop(): Promise<Shop> {
    const response = await get<Shop>({
      client: this.client,
      headers: this.headers,
      url: `${baseUrl}shops/current`,
    });

    return response.data;
  }

  /**
   * Fetch the dashboard for the current shop from the Fourthwall API.
   * @async
   * @return {Promise<DashboardResponse>} Returns a promise that resolves with the data from the API.
   * @throws {Error} Will throw an error if the request fails.
   */
  async getCurrentShopDashboard(): Promise<DashboardResponse> {
    const response = await get<DashboardResponse>({
      client: this.client,
      headers: this.headers,
      url: `${baseUrl}shops/current/dashboard`,
    });

    return response.data;
  }

  /**
   * Fetch creator integrations from the Fourthwall API.
   * @async
   * @return {Promise<CreatorIntegrationsResponse>} Returns a promise that resolves with the data from the API.
   * @throws {Error} Will throw an error if the request fails.
   */
  async getCreatorIntegrations(): Promise<CreatorIntegrationsResponse> {
    const response = await get<CreatorIntegrationsResponse>({
      client: this.client,
      headers: this.headers,
      url: `${baseUrl}creator-integrations`,
    });

    return response.data;
  }

  /**
   * Fetch giveaway contributions from the Fourthwall API.
   * @async
   * @return {Promise<GiveawayContributionResponse>} Returns a promise that resolves with the data from the API.
   * @throws {Error} Will throw an error if the request fails.
   */
  async getGiveawayContribution(): Promise<GiveawayContributionResponse> {
    const response = await get<GiveawayContributionResponse>({
      client: this.client,
      headers: this.headers,
      url: `${baseUrl}giveaway-contribution`,
    });

    return response.data;
  }

  /**
   * Fetch orders from the Fourthwall API, with optional filtering and pagination.
   * @async
   * @param {Object} param0 - Options for the request.
   * @param {boolean} param0.filterOutGiveawayGifts - If true, giveaway gifts will be excluded from the results.
   * @param {number} param0.page - The page number for pagination.
   * @param {number} param0.size - The number of items per page.
   * @return {Promise<OrdersResponse>} Returns a promise that resolves with the data from the API.
   * @throws {Error} Will throw an error if the request fails.
   */
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
