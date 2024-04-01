import { MovieCard } from "./";

const MovieList = (props) => {
  return (
    props.results.map(result => (
        <MovieCard key = {result.id} result = {result} />
    ))
  )
}

export default MovieList