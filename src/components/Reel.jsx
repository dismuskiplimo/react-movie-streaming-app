import {useState, useEffect} from 'react';

import { MovieList, NavigationBar, ResultsHeader } from "../components";

import {queryResults} from "../helpers/functions";

const Reel = (props) => {
    const [results, setResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState(1);
    const [resultsCount, setResultsCount] = useState(0);
    const [type, setType] = useState("movie");
    const query = props.query || "";

    let uri = props.uri;

    //function to update page uri
    const updateURI = () => {
        if(uri === "now_playing" && type === "tv"){
            uri = "on_the_air";
        }

        if(uri === "on_the_air" && type === "movie"){
            uri = "now_playing";
        }

        if(uri === "upcoming" && type === "tv"){
            uri = "airing_today";
        }

        if(uri === "airing_today" && type === "movie"){
            uri = "upcoming";
        }
    }

    // perform fetch
    const performFetch = arr => {
        if(uri === 'trending'){
            queryResults(`${props.tmdb.baseUrl}/trending/${type}/${props.timeWindow}?page=${currentPage}`, props.tmdb, arr, setResults, setPages, setResultsCount);
        }

        else if(uri === 'search'){
            queryResults(`${props.tmdb.baseUrl}/search/${type}?include_adult=false&query=${encodeURIComponent(query)}&page=${currentPage}`, props.tmdb, arr, setResults, setPages, setResultsCount);
        }

        else{
            queryResults(`${props.tmdb.baseUrl}/${type}/${uri}?page=${currentPage}`, props.tmdb, arr, setResults, setPages, setResultsCount);
        }
    }

    // load movies
    useEffect(() => {
        updateURI();

        performFetch(results);

        
    }, [currentPage]);

    useEffect(() => {
        updateURI();

        setCurrentPage(1);
        setPages(1);
        setResults([]);
        setResultsCount(0);

        performFetch([]);
    }, [type, query]);

    return (
        <div> 
            <NavigationBar />

            <div className='container mx-auto max-w-7xl px-10'>
                <ResultsHeader className = "text-white font-bold text-lg" text={props.title} resultsCount = {resultsCount} setType={setType} />
                <MovieList pages = {pages} currentPage = {currentPage} setCurrentPage = {setCurrentPage} type = {type} results = {results} />
            </div>
        </div> 
    );
}

export default Reel;