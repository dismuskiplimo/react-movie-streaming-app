import {useState, useEffect} from 'react';

import { MovieList, Pagination } from "../components";

const NowPlaying = ({tmdb}) => {
    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [pages, setPages] = useState([]);
    const [moviesCount, setMoviesCount] = useState(0);

    //function to load page
    const loadPage = page => {
        // fetch from imdb
        fetch(`${tmdb.baseUrl}/movie/now_playing?page=${page}`, {
            headers: {
                "Authorization" : `Bearer ${tmdb.readAccessToken}`,
                "Accept": "application/json",
            }
        })
        .then(response => response.json())
        .then(response => {
            // updae states and render to page
            setMovies(response.results);

            // update the pages array
            let p = [];

            for(let i = 1; i <= response.total_pages; i++){
                p.push(i);
            }
            
            setPages(p);
            setMoviesCount(response.total_results);
        })
        .catch(e => console.log(e));
    }

    // load movies
    useEffect(() => {
        loadPage(currentPage);
    }, [currentPage]);

    return (
        <div className='container mx-auto max-w-7xl'>
            <div className='grid gap-4 grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8'>
                <MovieList movies = {movies} />
            </div>

            <div className="w-full">
                <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} pages={pages} />
            </div>
        </div>
        
    );
}

export default NowPlaying;