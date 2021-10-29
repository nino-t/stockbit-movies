interface WatchButton {
  label: string
  href: string
}

export interface StbHeroMovieProps {
  title: string
  synopsis: string
  background: string
  watchButton: WatchButton
  containerClassname?: string
}