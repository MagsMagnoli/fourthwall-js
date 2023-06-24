import { AxiosInstance } from "axios";
import { load } from "cheerio";
import { LoginPayload } from "../types/login";
import { TokenRequest, TokenResponse } from "../types/token";
import { get, post } from "./fourthwall";

const loginUrl =
  "https://auth.fourthwall.com/auth/realms/Fourthwall/protocol/openid-connect/auth?client_id=Dashboard&redirect_uri=https://hero.fourthwall.com/redirect/my-shop.fourthwall.com/admin/dashboard?redirect=&response_mode=fragment&response_type=code&scope=openid";
const tokenUrl =
  "https://auth.fourthwall.com/auth/realms/Fourthwall/protocol/openid-connect/token";

export async function login({
  client,
  username,
  password,
}: {
  client: AxiosInstance;
  username: string;
  password: string;
}): Promise<string> {
  const loginPageResponse = await get<string>({ client, url: loginUrl });

  const html = loginPageResponse.data;
  const $ = load(html);
  const formActionUrl = $("form").attr("action");

  if (!formActionUrl) {
    throw new Error("Unable to find form action URL");
  }

  const loginResponse = await post<string, LoginPayload>({
    client,
    url: formActionUrl,
    data: {
      rememberMe: "true",
      username,
      password,
      credentialId: "",
    },
  });

  // Extract authorization code from the redirect URL
  const redirectUrl = loginResponse.request.responseURL;
  const urlParams = new URLSearchParams(new URL(redirectUrl).search);
  const code = urlParams.get("code");

  if (!code) {
    throw new Error("Failed to obtain authorization code");
  }

  const tokenResponse = await post<TokenResponse, TokenRequest>({
    client,
    url: tokenUrl,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    data: {
      code,
      grant_type: "authorization_code",
      client_id: "Dashboard",
      redirect_uri:
        "https://hero.fourthwall.com/redirect/my-shop.fourthwall.com/admin/dashboard?redirect=",
    },
  });

  const accessToken = tokenResponse.data.access_token;

  if (!accessToken) {
    throw new Error("Failed to obtain access token");
  }

  return accessToken;
}
