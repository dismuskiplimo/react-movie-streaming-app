import { Reel } from "../components";

const TopRated = (props) => {
    return (
        <Reel tmdb={props.tmdb} uri="top_rated" title="Top Rated" /> 
    );
}

export default TopRated;