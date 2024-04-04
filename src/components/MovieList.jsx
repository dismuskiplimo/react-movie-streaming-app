import { MovieCard, Button } from "./";

const MovieList = (props) => {
  const loadMore = () => {
    if(props.currentPage < props.pages){
      props.setCurrentPage(props.currentPage + 1);
    }
  }


  return (
    <div className="w-full">
      <div className='grid gap-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8'>
        {
          props.results.map(result => (
            <MovieCard type = {props.type} key = {result.id + '-' + Math.random()} result = {result} />
          ))
        }
      </div>

      <div className="text-center my-5">
        { props.currentPage < props.pages && (
          <Button onClick={ () => loadMore() } className="border-white border-2 text-white" type="button" label = "Load More"/>
        ) }
      </div>
    </div>
    
    
  )
}

export default MovieList