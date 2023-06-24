export interface Supporter {
  email: string;
  username: string;
  message: string | null;
}

export interface Value {
  value: number;
  currency: string;
}

export interface GiveawayBreakdown {
  type: string;
  id: string;
  createdAt: string;
  supporter: Supporter;
  status: string;
  total: Value;
  profit: Value;
}

export interface GiveawayResult {
  giveawayId: string;
  createdAt: string;
  productImageUrl: string;
  supporter: Supporter;
  numberOfGifts: number;
  claimedGifts: number;
  giftsLeftToRedeem: number;
  total: Value;
  profit: Value;
  giveawayBreakdown: GiveawayBreakdown[];
}

export interface Page {
  pageNumber: number;
  pageSize: number;
  elementsSize: number;
  elementsTotal: number;
  totalPages: number;
  hasNextPage: boolean;
}

export interface GiveawayContributionResponse {
  result: GiveawayResult[];
  page: Page;
}
