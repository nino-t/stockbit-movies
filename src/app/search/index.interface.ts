export interface SearchState {
  status: 'idle' | 'loading' | 'failed'
  page: number
  total: number
}