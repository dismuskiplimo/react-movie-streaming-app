import { Reel } from "../components";

const Popular = (props) => {
    return (
        <Reel tmdb={props.tmdb} uri="popular" title="Popular" /> 
    );
}

export default Popular;