import { useParams } from "react-router-dom";

import { Reel } from "../components";

const Search = (props) => {
    const { query } = useParams();

    return (
        <Reel tmdb={props.tmdb} uri="search" query = {query} title={`Search Results for '${query}'`} /> 
    );
}

export default Search;