import { MovieCard } from "./";

const MovieList = ({movies}) => {
  return (
    movies.map(movie => (
        <MovieCard key = {movie.id} movie = {movie} />
    ))
  )
}

export default MovieList