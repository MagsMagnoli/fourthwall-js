export interface LoginPayload {
  rememberMe: string;
  username: string;
  password: string;
  credentialId: string;
}

export interface TokenRequest {
  code: string;
  grant_type: string;
  client_id: string;
  redirect_uri: string;
}

export interface TokenResponse {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_expires_in: number;
  token_interface: string;
  id_token: string;
  "not-before-policy": number;
  session_state: string;
  scope: string;
}
