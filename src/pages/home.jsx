import {useState, useEffect} from 'react';

import { MovieList } from "../components";

const Home = ({tmdb}) => {
    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);

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
            // render to page
            setMovies(response.results);
            //console.log(response);
        })
        .catch(e => console.log(e));
    }

    // load movies
    useEffect(() => {
        loadPage(page);
        
    }, []);

    return (
        <div className='container mx-auto max-w-7xl'>
            <div className='xl:columns-8 lg:columns-6 md:columns-4 sm:columns-3 columns-1'>
                <MovieList movies = {movies} />
            </div>
            
        </div>
        
    );
}

export default Home;