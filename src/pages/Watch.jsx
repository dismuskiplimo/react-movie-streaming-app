import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { Button, NavigationBar } from "../components";

const Watch = (props) => {
    const {type, id} = useParams();
    const [result, setResult] = useState("");
    const [genres, setGenres] = useState([]);

    // call use effect
    useEffect(() => {
        // fetch movie details
        fetch(`${props.tmdb.baseUrl}/${type}/${id}`, {
            headers: {
                "Authorization" : `Bearer ${props.tmdb.readAccessToken}`,
                "Accept": "application/json",
            }
        })
        .then(response => response.json())
        .then(response => {
            setResult(response);

            const g = [];

            // update genres
            response.genres.map(genre => {
                g.push(genre.name);
            });
            
            setGenres([...g]);
        })
        .catch(err => console.log(err));
    }, []);


    return (
        <>
            <NavigationBar />

            <div className="w-full min-h-[100vh] bg-cover bg-no-repeat bg-center" style={{backgroundImage: `url(https://image.tmdb.org/t/p/original/${result.backdrop_path})`}}>
                <div className="container max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2">
                        <div className="bg-[rgba(0,0,0,0.4)] text-white">
                            <h1>{result.title}</h1>
                            
                            <div className="flex gap-4 align-middle items-center">
                                <span><i className="fa fa-star text-yellow-600"></i> {result.vote_average?.toFixed(1)}</span>
                                <span><i className="text-[8px] fa fa-circle"></i></span>
                                <span>{result.runtime} Min</span>
                                <span><i className="text-[8px] fa fa-circle"></i></span>
                                <span>{result.release_date?.substring(0,4)}</span>
                            </div>

                            <div>
                               <p> <span className="text-slate-500">Genres:</span> { genres.join(", ") }</p>
                            </div>
                            
                            <div>
                                <p>{ result.overview }</p>
                            </div>
                        </div>

                        <div>
                            <iframe className="w-full min-h-[50vh]" src={ `https://vidsrc.to/embed/${type}/${id}`}></iframe>
                        </div>

                        
                    </div>

                    
                </div>

            
            </div>
        </>
    );
}

export default Watch;