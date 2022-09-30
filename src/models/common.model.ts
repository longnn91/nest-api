export interface Pagination {
  page?: number;
  perPage?: number;
  total?: number;
}

export interface QueryParams extends Pagination {
  name?: string;
}
