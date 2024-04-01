const MovieCard = (props) => {
  return (
    <div className="flex bg-center bg-no-repeat bg-cover rounded-xl mb-5 min-h-80"  style={{backgroundImage: `url(https://image.tmdb.org/t/p/w500/${props.result.poster_path})`}}>
        <div className="w-full flex flex-col justify-between">
          <div className="flex justify-between p-3">
            <span className=" bg-yellow-500 p-2 rounded-lg shadow-lg text-sm">{props.result.vote_average.toFixed(1)}</span>
            {/* <span className="text-white bg-orange-500 p-2 rounded-lg shadow-lg text-sm">{movie.quality}</span> */}
          </div>

          <div className="text-center text-white fade-bottom rounded-b-xl p-3">
              <span className="text-shadow">{props.result.title}</span>
          </div>
        </div>  
    </div>
  )
}

export default MovieCard;