import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MovieList, NavigationBar } from "../components";

import {queryResults} from "../helpers/functions";

const Search = (props) => {
    const { query } = useParams(); 

    const [results, setResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState(1);
    const [resultsCount, setResultsCount] = useState(0);
    const [type, setType] = useState("movie");

    useEffect(() => {
            performSearch();
    }, []);

    // handle search
    const performSearch = () => {
        queryResults(`${props.tmdb.baseUrl}/search/${type}?include_adult=false&query=${encodeURIComponent(query)}&page=${currentPage}`, props.tmdb, results, setResults, setPages, setResultsCount);     
    }
    
    return (
        <div> 
        <NavigationBar />

        <div className='container mx-auto max-w-7xl px-10'>
            <div className="w-full my-5 flex justify-between">
                <h1 className='text-white font-bold text-lg'>Search Results for {`'${query}'`} ({resultsCount.toLocaleString()})</h1>

                <select onChange={e => setType(e.target.value)} id="">
                    <option value="movie">Movies</option>
                    <option value="tv">TV Shows</option>
                </select>
            </div>
            
            <MovieList pages = {pages} currentPage = {currentPage} setCurrentPage = {setCurrentPage} type = {type} results = {results} />
        </div>
    </div> 
    );
}

export default Search;