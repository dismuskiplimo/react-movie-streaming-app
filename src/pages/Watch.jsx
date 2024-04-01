import { useState } from "react";

import { Button, NavigationBar } from "../components";

const Watch = (props) => {
    const [query, setQuery] = useState("");

    // handle search
    const handleSearch = () => {
        if(query !== ""){
            // perform search
            fetch(`${props.tmdb.baseUrl}/search/keyword?query=`)
            .then(response => response.json())
            .then(response => {

            })
            .catch(err => console.log(err));

        }
        
    }

    return (
        <>
            <NavigationBar />

            <div className="w-full text-center">
                <div>
                    <input className="w-full text-center max-w-xl mx-auto outline-none border-neutral-600 rounded-md border-2" type="text" name="" id="" onChange={e => setQuery(e.target.value.trim())} placeholder="Search Movie" />
                </div>

                <Button onClick={ () => handleSearch() } className="bg-teal-500" type="button" label = "Search"/>
            </div>
        </>
    );
}

export default Watch;