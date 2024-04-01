import { useState } from "react";

import { Button, NavigationBar } from "../components";

const SearchResults = (props) => {
    const [query, setQuery] = useState("");

    // handle search
    const handleSearch = () => {
        if(query !== ""){
            window.location.href = `./search-results.html?query=${encodeURIComponent(query)}`;
        }
        
    }

    return (
        <>
            <NavigationBar/>

            <div className="w-full text-center">
                <div>
                    <input className="w-full text-center max-w-xl mx-auto outline-none border-neutral-600 rounded-md border-2" type="text" name="" id="" onChange={e => setQuery(e.target.value.trim())} placeholder="Search Movie" />
                </div>

                <Button onClick={ () => handleSearch() } className="bg-teal-500" type="button" label = "Search"/>
            </div>
        </>
    );
}

export default SearchResults;