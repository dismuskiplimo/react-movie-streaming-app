import {useState, useEffect} from 'react';

import { MovieList, NavigationBar, Pagination } from "../components";

import {queryResults} from "../helpers/functions";

const NowPlaying = ({tmdb}) => {
    const [results, setResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState([]);
    const [resultsCount, setResultsCount] = useState(0);
    const [type, setType] = useState("movie");

    // load movies
    useEffect(() => {
        queryResults(`${tmdb.baseUrl}/movie/now_playing?page=${currentPage}`, tmdb, setResults, setPages, setResultsCount);
    }, [currentPage]);

    // when movie or tv show is selected
    useEffect(() => {
        setCurrentPage(1);
    }, [type]);

    return (
        <div> 
            <NavigationBar />

            <div className='container mx-auto max-w-7xl'>
                <div className="w-full">
                    <h1>Now Playing ({resultsCount})</h1>

                    <select onChange={e => setType(e.target.value)} id="">
                        <option value="movie">Movie</option>
                        <option value="tv">TV Show</option>
                    </select>
                </div>
                
                <div className='grid gap-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8'>
                    <MovieList type = {type} results = {results} />
                </div>

                <div className="w-full">
                    <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} />
                </div>
            </div>
        </div> 
    );
}

export default NowPlaying;