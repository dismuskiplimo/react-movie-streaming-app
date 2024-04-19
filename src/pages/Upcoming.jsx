import { Reel } from "../components";

const Upcoming = (props) => {
    return (
        <Reel tmdb={props.tmdb} uri="upcoming" title="Upcoming" /> 
    );
}

export default Upcoming;