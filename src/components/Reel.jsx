import {useState, useEffect} from 'react';

import { MovieList, NavigationBar, ResultsHeader } from "../components";

import {queryResults} from "../helpers/functions";

const Reel = (props) => {
    const [results, setResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState(1);
    const [resultsCount, setResultsCount] = useState(0);
    const [type, setType] = useState("movie");
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

    // load movies
    useEffect(() => {
        updateURI();

        queryResults(`${props.tmdb.baseUrl}/${type}/${uri}?page=${currentPage}`, props.tmdb, results, setResults, setPages, setResultsCount);
    }, [currentPage]);

    useEffect(() => {
        updateURI();

        setCurrentPage(1);
        setPages(1);
        setResults([]);
        setResultsCount(0);

        queryResults(`${props.tmdb.baseUrl}/${type}/${uri}?page=${currentPage}`, props.tmdb, [], setResults, setPages, setResultsCount);
    }, [type]);

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