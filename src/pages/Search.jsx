import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { MovieList, NavigationBar, ResultsHeader } from "../components";

import {queryResults} from "../helpers/functions";

const Search = (props) => {
    const { query } = useParams(); 

    const [results, setResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState(1);
    const [resultsCount, setResultsCount] = useState(0);
    const [type, setType] = useState("movie");

    useEffect(() => {
        queryResults(`${props.tmdb.baseUrl}/search/${type}?include_adult=false&query=${encodeURIComponent(query)}&page=${currentPage}`, props.tmdb, results, setResults, setPages, setResultsCount);
    }, [currentPage]);

    useEffect(() => {
        setCurrentPage(1);
        setPages(1);
        setResultsCount(0);

        queryResults(`${props.tmdb.baseUrl}/search/${type}?include_adult=false&query=${encodeURIComponent(query)}&page=${currentPage}`, props.tmdb, [], setResults, setPages, setResultsCount);
    }, [query, type]);
    
    return (
        <div> 
        <NavigationBar />

        <div className='container mx-auto max-w-7xl px-10'>
            

            <ResultsHeader className = "text-white font-bold text-lg" text={ `Search Results for '${query}'` } resultsCount = {resultsCount} setType={setType} />
            
            <MovieList pages = {pages} currentPage = {currentPage} setCurrentPage = {setCurrentPage} type = {type} results = {results} />
        </div>
    </div> 
    );
}

export default Search;