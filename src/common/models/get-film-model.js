export const getFilmModel = (film) => {
  debugger
  const {
    title,
    episode_id,
    opening_crawl,
    director,
    release_date
  } = film.result.properties

  return {
    header: title,
    episode_id,
    opening_crawl,
    director,
    release_date
  }
}
