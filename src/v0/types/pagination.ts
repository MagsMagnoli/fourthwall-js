export interface Page {
  pageNumber: number;
  pageSize: number;
  elementsSize: number;
  elementsTotal: number;
  totalPages: number;
  hasNextPage: boolean;
}

export interface Pagination {
  page: Page;
}
