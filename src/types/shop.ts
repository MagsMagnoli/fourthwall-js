export interface Shop {
  id: string;
  name: string;
  creatorName: string;
  description: string;
  status: string;
  internalDomain: string;
  baseUri: string;
  internalBaseUri: string;
  domains: string[];
  contactInfo: {
    shopEmail: string;
    contactEmail: string;
    phone: string;
    location: {
      name: string;
      address1: string;
      address2: string;
      city: string;
      state: string;
      zip: string;
      country: string;
    };
    transactionalEmail: string;
  };
  originAddress: null;
  settings: {
    currency: string;
    locale: string;
    weightUnit: string;
    tax: {
      taxesIncluded: boolean;
      taxShipping: boolean;
      countyTaxes: boolean;
    };
    payment: {
      publicApiKey: string;
    };
    notification: {
      orderPaid: null;
      multipleShipmentsOrderPaid: null;
      thankYouId: null;
      donationMailTemplateId: null;
      orderShipmentMailTemplateId: null;
      partialOrderShipmentMailTemplateId: null;
      finalOrderShipmentMailTemplateId: null;
      orderCancellation: null;
      orderRefund: null;
      orderPaymentRefund: null;
      orderEmailChanged: null;
      productionUpdate: null;
      cartAbandonedReminder: null;
    };
    passwordProtection: null;
    memberships: {
      enabled: boolean;
      tenantId: string;
    };
    schedule: null;
  };
  social: {
    youtube: string;
    twitter: string;
    tiktok: string;
    twitch: string;
  };
  logoUri: string;
  metafields: {
    theme: string;
    onboarding: {
      referrer: null;
      "lead-tier": string;
      "site-slug": string;
      "user-role": string;
      "contact-id": null;
      "oauth-flow": boolean;
      "creator-name": string;
      "manager-name": null;
      "creator-location": null;
      "creator-platform": string;
      "manager-location": null;
    };
    "channel-url": string;
    "channel-name": string;
    userEntityId: string;
    "channel-handle": string;
    "fourthwall-internal": boolean;
  };
  leadTier: string;
  canAcceptCharges: boolean;
  blockedTransactionsStatus: {
    type: string;
  };
  createdAt: string;
  domain: string;
  primaryDomain: string;
}

export interface ShopsResponse {
  shops: Shop[];
}
