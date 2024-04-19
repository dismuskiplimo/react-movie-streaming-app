import {useState, useEffect} from 'react';

import { MovieList, NavigationBar, ResultsHeader } from "../components";

import {queryResults} from "../helpers/functions";

const Reel = (props) => {
    const [results, setResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState(1);
    const [resultsCount, setResultsCount] = useState(0);
    const [type, setType] = useState("movie");

    // load movies
    useEffect(() => {
        queryResults(`${props.tmdb.baseUrl}/${type}/${props.uri}?page=${currentPage}`, props.tmdb, results, setResults, setPages, setResultsCount);
    }, [currentPage]);

    // when movie or tv show is selected
    useEffect(() => {
            setCurrentPage(1);
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