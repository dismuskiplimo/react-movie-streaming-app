import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

import { Button, NavigationBar } from "../components";

const Search = (props) => {
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState("");

    const [searchParams ] = useSearchParams(); 

    useEffect(() => {
        if(searchParams.get("query")){
            // set the query
            setQuery(searchParams.get("query"));

            // perform the search
            performSearch();
        }
    }, []);

    // handle search
    const performSearch = () => {
        if(query !== ""){
            // perform search
            fetch(`${props.tmdb.baseUrl}/search/keyword?query=${encodeURIComponent(query)}`, {
                headers: {
                    "Authorization" : `Bearer ${props.tmdb.readAccessToken}`,
                    "Accept": "application/json",
                }
            })
            .then(response => response.json())
            .then(response => {
                console.log(response);
            })
            .catch(err => console.log(err));
        }
        
    }
    

    return (
        <div>
            <div className="w-full">
                <NavigationBar />
            </div>

            <div className="w-full">
                <div className="container max-w-7xl text-center">
                    <div className="p-10">
                        <div>
                            <input className="w-full text-center max-w-xl mx-auto outline-none border-neutral-600 rounded-md border-2" type="text" name="" id="" onChange={e => setQuery(e.target.value.trim())} placeholder="Search Movie" />
                        </div>

                        <div className="mt-5">
                            <Button onClick={ () => handleSearch() } className="border-white border-2 text-white" type="button" label = "Search"/>
                        </div>      
                    </div>
                </div>
            </div>

            <div className="w-full">
                <div className="container max-w-7xl text-center">

                </div>
            </div>
        </div>
    );
}

export default Search;