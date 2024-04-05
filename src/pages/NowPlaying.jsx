import {useState, useEffect} from 'react';

import { MovieList, NavigationBar } from "../components";

import {queryResults} from "../helpers/functions";

const NowPlaying = ({tmdb}) => {
    const [results, setResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState(1);
    const [resultsCount, setResultsCount] = useState(0);
    const [type, setType] = useState("movie");

    // load movies
    useEffect(() => {
        queryResults(`${tmdb.baseUrl}/${type}/now_playing?page=${currentPage}`, tmdb, results, setResults, setPages, setResultsCount);
    }, [currentPage]);

    // when movie or tv show is selected
    useEffect(() => {
            setCurrentPage(1);
    }, [type]);

    return (
        <div> 
            <NavigationBar />

            <div className='container mx-auto max-w-7xl px-10'>
                <div className="w-full my-5 flex justify-between">
                    <h1 className='text-white font-bold text-lg'>Now Playing ({resultsCount.toLocaleString()})</h1>

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

export default NowPlaying;