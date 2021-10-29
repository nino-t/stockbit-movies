export interface StbInfiniteScrollPaginationProps {
  status: 'idle' | 'loading' | 'failed'
  total: number
  currentPage: number
  totalInResponse: number
  containerClassname?: string
  handleLoadMore: (page: number) => void
  children: React.ReactNode
}