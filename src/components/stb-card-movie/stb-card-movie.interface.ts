/**
 * StbCardMovieProps
 * @memberof Props
 * @alias StbCardMovieProps
 */
export interface StbCardMovieProps {
  /**
   * Primary id of movie. Unique and cannot be the same.
   * @property {string}
   */
  id: string
  /**
   * Title of movie.
   * @property {string}
   */
  title: string
  /**
   * Release year of movie.
   * @property {string}
   */
  release: string
  /**
   * Poster image url of movie.
   * @property {string}
   */
  poster: string
  /**
   * Movie detail link or link target to page movement.
   * @property {string}
   */
  href: string
  /**
   * Function event for poster image clicked.
   * @property {Function(): void}
   */
  handlePosterClicked: () => void
}