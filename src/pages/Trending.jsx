import { Reel } from "../components";

const Trending = (props) => {
    return (
        <Reel tmdb={props.tmdb} uri="trending" timeWindow="week" title="Trending" /> 
    );
}

export default Trending;