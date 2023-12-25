export type Order = {
  id: string;
  shopId: string;
  friendlyId: string;
  checkoutId: string;
  status: string;
  email: string;
  emailMarketingOptIn: boolean;
  username: string;
  message: string;
  amounts: {
    subtotal: CurrencyValue;
    shipping: CurrencyValue;
    tax: CurrencyValue;
    donation: CurrencyValue;
    discount: CurrencyValue;
    total: CurrencyValue;
  };
  billing: {
    address: Address;
  };
  shipping: {
    address: Address;
  };
  offers: Offer[];
  source: {
    type: string;
  };
  createdAt: string;
  updatedAt: string;
};

type CurrencyValue = {
  value: number;
  currency: string;
};

type Address = {
  name: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  phone: string;
};

type Image = {
  id: string;
  url: string;
  width: number;
  height: number;
};

type Attribute = {
  name: string;
  swatch?: string;
};

type Variant = {
  id: string;
  name: string;
  sku: string;
  unitPrice: CurrencyValue;
  attributes: {
    description: string;
    color?: Attribute;
    size?: Attribute;
  };
  quantity: number;
  price: CurrencyValue;
};

type Offer = {
  id: string;
  name: string;
  slug: string;
  description: string;
  primaryImage: Image;
  variant: Variant;
};

export type GetOrdersResponse = {
  results: Order[];
};
