import { Link, useNavigate } from "react-router-dom";
import { Button } from "../components";
import { useState } from "react";

const NavigationBar = () => {
    const links = [
        {
            link: "/",
            text: "Home",
        },

        {
            link: "/popular",
            text: "Popular",
        },

        {
            link: "/top-rated",
            text: "Top Rated",
        },

        {
            link: "/upcoming",
            text: "Upcoming",
        },
        
    ];

    const [query, setQuery] = useState("");

    const navigate = useNavigate();

    const handleSearch = () => {
        if(query !== ""){
            navigate(`/search/${encodeURIComponent(query)}`)
        }
    }


    return (
        <nav className="w-full py-5">
            <div className="container flex flex-wrap justify-between  items-center mx-auto max-w-7xl px-10">
                <ul className="flex gap-5">
                    {
                        links.map(link => (
                            <li className="" key = {link.link}>
                                <Link className="text-white hover:text-slate-300 inline-block"  key = {link.link} to = {link.link}>{link.text}</Link>
                            </li>
                        ))
                    }
                </ul>

                <div className="flex gap-3">
                    <input onChange={ e => setQuery(e.target.value.trim() )} onKeyDown={e => e.key == 'Enter' ? handleSearch() : '' } className="w-full text-center max-w-xl mx-auto outline-none border-neutral-600 rounded-md border-2" type="text" name="query" id="" placeholder="Search Movie" required />
                    <Button onClick = { () => handleSearch() } className="border-white border-2 text-white" type="button" label = "Search"/>
                </div>
            </div> 
        </nav>
    )
}

export default NavigationBar