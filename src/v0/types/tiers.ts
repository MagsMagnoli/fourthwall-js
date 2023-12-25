export type TiersResponse = {
  tiers: Tier[];
};

type Tier = {
  id: number;
  name: string;
  description: string;
  position: number;
  status: string;
  image: Image;
  statistics: Statistics;
  variants: Variants;
  mobileWlaEnabled: boolean;
};

type Image = {
  url: string;
  thumbnailUrl: string;
};

type Statistics = {
  membersCount: number;
};

type Variants = {
  monthly: Monthly;
};

type Monthly = {
  amount: number;
};
