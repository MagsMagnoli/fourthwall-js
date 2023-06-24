export type TokenRequest = {
  code: string;
  grant_type: string;
  client_id: string;
  redirect_uri: string;
};

export type TokenResponse = {
  access_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_expires_in: number;
  token_type: string;
  id_token: string;
  "not-before-policy": number;
  session_state: string;
  scope: string;
};
