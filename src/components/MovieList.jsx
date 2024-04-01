import { MovieCard } from "./";

const MovieList = (props) => {
  return (
    props.results.map(result => (
        <MovieCard type = {props.type} key = {result.id} result = {result} />
    ))
  )
}

export default MovieList