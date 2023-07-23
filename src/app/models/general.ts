export interface PaginationModel {
  page: number;
  limit: number;
}

export interface PaginatorModel {
  page?: number;
  limit?: number;
  nextPage?: number;
  prevPage?: number;
  totalDocs?: number;
  totalPages?: number;
}