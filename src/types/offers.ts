import { Pagination } from "./pagination";

export interface OffersResponse extends Pagination {
  offers: Offer[];
}

type ID = string;

interface Tag {
  type: string;
  name: string;
}

interface Image {
  id: ID;
  url: string;
  width: number;
  height: number;
  position: number;
  tags: {
    tags: Tag[];
  };
  source: string;
}

interface Requirements {
  allowedTiers: null | string[];
}

interface ValueCurrencyPair {
  value: number;
  currency: string;
}

interface Weight {
  value: number;
  unit: string;
}

interface Option {
  name: string;
  colorSwatch?: string;
  price: null | ValueCurrencyPair;
  weight: null | Weight;
  images: ID[];
  id: string;
}

interface VariesBy {
  price: boolean;
  weight: boolean;
  imagery: boolean;
}

interface VariantType {
  type: string;
  title: string;
  options: Option[];
  variesBy: VariesBy;
}

interface ShipmentStartDate {
  type: string;
}

interface Shipment {
  isShipmentStartDateEditable: boolean;
  shipmentStartDate: ShipmentStartDate;
}

interface Section {
  type: string;
  title: string;
  bodyHtml: string;
}

interface VisualHints {
  customSkus: boolean;
}

interface CustomsInformation {
  hsCode: null | string;
  countryOfOrigin: null | string;
}

interface State {
  status: string;
  available: boolean;
  password: null | string;
}

interface Settings {
  requiresShipping: boolean;
  taxable: boolean;
  isSoundScanProduct: boolean;
  donation: boolean;
}

interface AttributesList {
  name: string;
  colorSwatch?: string;
  type: string;
}

interface Dimensions {
  length: number;
  width: number;
  height: number;
  unit: string;
}

interface Variant {
  type: string;
  id: ID;
  offerId: ID;
  shopId: ID;
  status: string;
  name: string;
  slug: string;
  sku: string;
  productVariantId: ID;
  price: ValueCurrencyPair;
  weight: Weight;
  dimensions: Dimensions;
  attributesList: AttributesList[];
  settings: Settings;
  images: ID[];
  position: number;
  quantity: null | number;
  metafields: null | any;
  createdAt: string;
  updatedAt: string;
  unitPrice: ValueCurrencyPair;
  attributesDescription: string;
  colorAttribute: AttributesList;
  sizeAttribute: AttributesList;
  customAttribute: null | any;
  colorOption: AttributesList;
  customOption: null | any;
  sizeOption: AttributesList;
  attributes: Record<string, string>;
  colorName: string;
  size: string;
  colorSwatch: string;
  customVariationValue: string;
  options: Settings;
  productId: null | string;
  strikethroughPrice: null | ValueCurrencyPair;
  barcode: null | string;
  cost: ValueCurrencyPair | null;
}

interface Offer {
  type: string;
  id: ID;
  shopId: ID;
  customizationId: ID;
  productId: ID;
  bespokeProductId: null | ID;
  membershipTierVariantId: null | ID;
  status: string;
  requirements: Requirements;
  name: string;
  slug: string;
  description: string;
  images: Image[];
  variantTypes: VariantType[];
  fulfillmentService: string;
  fulfillingService: string;
  manufacturingService: string;
  shipment: Shipment;
  drop: null | any;
  digitalItems: any[];
  additionalSections: Section[];
  soundScanInfo: null | any;
  visualHints: VisualHints;
  metafields: null | any;
  customsInformation: CustomsInformation;
  createdAt: string;
  updatedAt: string;
  sellerId: ID;
  variationColorTitle: string;
  variationCustomTitle: string;
  variationSizeTitle: string;
  variationTypes: string[];
  variationEnabled: boolean;
  sizeGuideUrl: string;
  state: State;
  variants: Variant[];
}
