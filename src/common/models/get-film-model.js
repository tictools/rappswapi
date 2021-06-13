export const getFilmModel = (film) => {
  const { title, episode_id, opening_crawl, director, release_date } =
    film.result.properties

  return {
    header: title,
    episode_id,
    opening_crawl,
    director,
    release_date,
  }
}
