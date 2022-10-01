export interface Pagination {
  page?: number;
  limit?: number;
  total?: number;
}

export interface QueryParams extends Pagination {
  name?: string;
  search?: string;
}
