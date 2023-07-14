export interface OfferAnalyticsResponse {
  count: number;
  sold: number;
  items: Record<string, Item>;
}

interface Item {
  offerId: string;
  count: number;
  sold: number;
}
