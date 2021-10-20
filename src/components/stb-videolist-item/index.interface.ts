export interface VideolistItem {
  id: string
  poster: string
  title: string
  year: string
  type: string
  handlePosterClicked: () => void
}