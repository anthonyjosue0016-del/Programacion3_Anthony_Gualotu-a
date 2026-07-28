// src/types/query.types_mp.ts
export interface ListQuery {
  page?: number
  limit?: number
  search?: string
  searchField?: string
  sort?: string
  order?: 'ASC' | 'DESC'
}
