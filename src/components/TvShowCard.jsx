import { Link } from "react-router-dom";

import moviePoster from "../assets/movie-poster.jpg";

const TvShowCard = (props) => {
  return (
    <Link to={`/watch/${props.type}/${props.result.id}`}>
      <div className="relative rounded-xl mb-5"  style={{backgroundImage: `url()`}}>
          
            <img className="w-full rounded-xl" src={ props.result.poster_path ? `https://image.tmdb.org/t/p/w500/${props.result.poster_path}` : moviePoster} alt={props.result.title} /> 
          
          <div className="absolute top-0 left-0 bottom-0 right-0">
            <div className="w-full flex flex-col justify-between h-full">
              <div className="flex justify-between p-3">
                <span className=" bg-yellow-500 p-2 rounded-lg shadow-lg text-sm">{props.result.vote_average.toFixed(1)}</span>
                {/* <span className="text-white bg-orange-500 p-2 rounded-lg shadow-lg text-sm">{movie.quality}</span> */}
              </div>

              <div className="text-center text-white fade-bottom rounded-b-xl p-3">
                  <span className="text-shadow">{props.result.name} ({props.result.first_air_date?.substring(0,4)})</span>
              </div>
            </div> 
          </div>   
      </div>
    </Link>
  )
}

export default TvShowCard;