export type Page = {
  pageNumber: number;
  pageSize: number;
  elementsSize: number;
  elementsTotal: number;
  totalPages: number;
  hasNextPage: boolean;
};

export type Pagination = {
  page: Page;
};
