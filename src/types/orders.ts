import { Pagination } from "./pagination";

export type OrdersResponse = Pagination & {
  orders: Order[];
};

export interface Order {
  type: string;
  profit: Profit;
  id: string;
  friendlyId: string;
  cartId: string;
  checkoutId: string;
  giftId: any;
  status: string;
  refund: Refund;
  cancellation: any;
  shopId: string;
  email: string;
  offers: Offer[];
  offersCancelled: any[];
  currentAmounts: CurrentAmounts;
  cancelledAmounts: any;
  paidPaymentFee: any;
  paidBySupporter: PaidBySupporter;
  totalTax: TotalTax;
  merchandiseTotal: MerchandiseTotal;
  donation: any;
  discount: any;
  creatorBudget: any;
  billing: Billing;
  shipping: Shipping2;
  replacement: any;
  additionalFields: AdditionalField[];
  createdAt: string;
  updatedAt: string;
  fulfillmentStatus: string;
  message: string;
  orderMetadata: OrderMetadata;
  totalPrice: TotalPrice;
}

export interface Profit {
  value: number;
  currency: string;
}

export interface Refund {
  elements: any[];
}

export interface Offer {
  offer: Offer2;
  variant: Variant2;
  variantId: string;
  quantity: number;
  price: Price4;
}

export interface Offer2 {
  type: string;
  id: string;
  shopId: string;
  customizationId?: string;
  productId: string;
  bespokeProductId: any;
  membershipTierVariantId: any;
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
  drop: any;
  digitalItems: any[];
  additionalSections: AdditionalSection[];
  soundScanInfo: any;
  visualHints: VisualHints;
  metafields?: Metafields;
  customsInformation: CustomsInformation;
  createdAt: string;
  updatedAt: string;
  sellerId: string;
  variationColorTitle: string;
  variationCustomTitle: string;
  variationSizeTitle: string;
  variationTypes: string[];
  variationEnabled: boolean;
  sizeGuideUrl: string;
  state: State;
  variants: Variant[];
}

export interface Requirements {
  allowedTiers: any;
}

export interface Image {
  id: string;
  url: string;
  width: number;
  height: number;
  position: number;
  tags: Tags;
  source: string;
}

export interface Tags {
  tags: Tag[];
}

export interface Tag {
  type: string;
  name: string;
}

export interface VariantType {
  type: string;
  title: string;
  options: Option[];
  variesBy: VariesBy;
}

export interface Option {
  name: string;
  colorSwatch?: string;
  price?: Price;
  weight?: Weight;
  images: string[];
  id: string;
}

export interface Price {
  value: number;
  currency: string;
}

export interface Weight {
  value: number;
  unit: string;
}

export interface VariesBy {
  price: boolean;
  weight: boolean;
  imagery: boolean;
}

export interface Shipment {
  isShipmentStartDateEditable: boolean;
  shipmentStartDate: ShipmentStartDate;
}

export interface ShipmentStartDate {
  type: string;
}

export interface AdditionalSection {
  type: string;
  title: string;
  bodyHtml: string;
}

export interface VisualHints {
  customSkus: boolean;
}

export interface Metafields {
  external_id: number;
  customization: Customization[];
}

export interface Customization {
  region: string;
}

export interface CustomsInformation {
  hsCode: any;
  countryOfOrigin: any;
}

export interface State {
  status: string;
  available: boolean;
}

export interface Variant {
  type: string;
  id: string;
  offerId: string;
  shopId: string;
  status: string;
  name: string;
  slug: string;
  sku: string;
  productVariantId: string;
  price: Price2;
  weight: Weight2;
  dimensions: Dimensions;
  attributesList: AttributesList[];
  settings: Settings;
  images: string[];
  position: number;
  quantity: any;
  metafields?: Metafields2;
  createdAt: string;
  updatedAt: string;
  unitPrice: UnitPrice;
  attributesDescription: string;
  colorAttribute: ColorAttribute;
  sizeAttribute: SizeAttribute;
  customAttribute: any;
  colorOption: ColorOption;
  customOption: any;
  sizeOption: SizeOption;
  attributes: Attributes;
  colorName: string;
  size: string;
  colorSwatch: string;
  customVariationValue: string;
  options: Options;
  productId: any;
  strikethroughPrice: any;
  barcode: any;
}

export interface Price2 {
  value: number;
  currency: string;
}

export interface Weight2 {
  value: number;
  unit: string;
}

export interface Dimensions {
  length: number;
  width: number;
  height: number;
  unit: string;
}

export interface AttributesList {
  name: string;
  colorSwatch?: string;
  type: string;
}

export interface Settings {
  requiresShipping: boolean;
  taxable: boolean;
  isSoundScanProduct: boolean;
  donation: boolean;
}

export interface Metafields2 {
  external_id: number;
}

export interface UnitPrice {
  value: number;
  currency: string;
}

export interface ColorAttribute {
  name: string;
  colorSwatch: string;
  type: string;
}

export interface SizeAttribute {
  name: string;
  type: string;
}

export interface ColorOption {
  name: string;
  colorSwatch: string;
  type: string;
}

export interface SizeOption {
  name: string;
  type: string;
}

export interface Attributes {
  COLOR: string;
  SIZE: string;
}

export interface Options {
  requiresShipping: boolean;
  taxable: boolean;
  isSoundScanProduct: boolean;
  donation: boolean;
}

export interface Variant2 {
  type: string;
  id: string;
  offerId: string;
  shopId: string;
  status: string;
  name: string;
  slug: string;
  sku: string;
  productVariantId: string;
  price: Price3;
  weight: Weight3;
  dimensions: Dimensions2;
  attributesList: AttributesList2[];
  settings: Settings2;
  images: Image2[];
  position: number;
  quantity: any;
  metafields?: Metafields3;
  createdAt: string;
  updatedAt: string;
  unitPrice: UnitPrice2;
  attributesDescription: string;
  colorAttribute: ColorAttribute2;
  sizeAttribute: SizeAttribute2;
  customAttribute: any;
  colorOption: ColorOption2;
  customOption: any;
  sizeOption: SizeOption2;
  attributes: Attributes2;
  colorName: string;
  size: string;
  colorSwatch: string;
  customVariationValue: string;
  options: Options2;
  productId: any;
  strikethroughPrice: any;
  barcode: any;
}

export interface Price3 {
  value: number;
  currency: string;
}

export interface Weight3 {
  value: number;
  unit: string;
}

export interface Dimensions2 {
  length: number;
  width: number;
  height: number;
  unit: string;
}

export interface AttributesList2 {
  name: string;
  colorSwatch?: string;
  type: string;
}

export interface Settings2 {
  requiresShipping: boolean;
  taxable: boolean;
  isSoundScanProduct: boolean;
  donation: boolean;
}

export interface Image2 {
  id: string;
  url: string;
  width: number;
  height: number;
  position: number;
  tags: Tags2;
  source: string;
}

export interface Tags2 {
  tags: Tag2[];
}

export interface Tag2 {
  type: string;
  name: string;
}

export interface Metafields3 {
  external_id: number;
}

export interface UnitPrice2 {
  value: number;
  currency: string;
}

export interface ColorAttribute2 {
  name: string;
  colorSwatch: string;
  type: string;
}

export interface SizeAttribute2 {
  name: string;
  type: string;
}

export interface ColorOption2 {
  name: string;
  colorSwatch: string;
  type: string;
}

export interface SizeOption2 {
  name: string;
  type: string;
}

export interface Attributes2 {
  COLOR: string;
  SIZE: string;
}

export interface Options2 {
  requiresShipping: boolean;
  taxable: boolean;
  isSoundScanProduct: boolean;
  donation: boolean;
}

export interface Price4 {
  value: number;
  currency: string;
}

export interface CurrentAmounts {
  offers: Offers;
  shipping: Shipping;
  tax: Tax;
  discount: Discount;
  total: Total;
}

export interface Offers {
  value: number;
  currency: string;
}

export interface Shipping {
  value: number;
  currency: string;
}

export interface Tax {
  value: number;
  currency: string;
}

export interface Discount {
  value: number;
  currency: string;
}

export interface Total {
  value: number;
  currency: string;
}

export interface PaidBySupporter {
  value: number;
  currency: string;
}

export interface TotalTax {
  total: Total2;
  totalRate: number;
  elements: Element[];
}

export interface Total2 {
  value: number;
  currency: string;
}

export interface Element {
  amount: Amount;
  rate: number;
  title: string;
  taxType: string;
}

export interface Amount {
  value: number;
  currency: string;
}

export interface MerchandiseTotal {
  value: number;
  currency: string;
}

export interface Billing {
  address: Address;
}

export interface Address {
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  phone: any;
  vatId: any;
}

export interface Shipping2 {
  address: Address2;
  method: string;
  price: Price5;
  shipments: Shipment2[];
}

export interface Address2 {
  firstName: string;
  lastName: string;
  address1: string;
  address2: string;
  city: string;
  state: string;
  country: string;
  zip: string;
  phone: any;
  vatId: any;
}

export interface Price5 {
  value: number;
  currency: string;
}

export interface Shipment2 {
  id: string;
  items: Item[];
  shippingRate: ShippingRate;
  delivery: Delivery;
}

export interface Item {
  offerId: string;
  variantId: string;
}

export interface ShippingRate {
  id: string;
  shipmentId: string;
  service: string;
  description: string;
  price: Price6;
  type: string;
}

export interface Price6 {
  value: number;
  currency: string;
}

export interface Delivery {
  dropEndDate: any;
  manufacturingTime: ManufacturingTime;
  fulfillmentTime: any;
  shippingTime: ShippingTime;
  totalDeliveryTime: TotalDeliveryTime;
}

export interface ManufacturingTime {
  type: string;
  from: string;
  to: string;
}

export interface ShippingTime {
  type: string;
  from: string;
  to: string;
}

export interface TotalDeliveryTime {
  type: string;
  from: string;
  to: string;
}

export interface AdditionalField {
  name: string;
  value: string;
}

export interface OrderMetadata {
  orderSoundScanInfo: any;
}

export interface TotalPrice {
  value: number;
  currency: string;
}
