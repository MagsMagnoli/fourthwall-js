export interface IntegrationStatus {
  status: "CONNECTED" | "NOT_CONNECTED";
  channelName?: string;
  missingScopes?: string[];
}

export interface CreatorIntegrationsResponse {
  twitch: IntegrationStatus;
  streamelements: IntegrationStatus;
  fwdiscord: IntegrationStatus;
  youtubeMerchshelf: IntegrationStatus;
}
