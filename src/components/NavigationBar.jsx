import { Link } from "react-router-dom";
import { Button } from "../components";

const NavigationBar = () => {
    const links = [
        {
            link: "/",
            text: "Home",
        },
        
        {
            link: "/now-playing",
            text: "Now Playing",
        },

        {
            link: "/popular",
            text: "Popular",
        },

        {
            link: "/top-rated",
            text: "Trending",
        },

        {
            link: "/upcoming",
            text: "Upcoming",
        },
        
    ];
    return (
        <nav className="w-full pt-5">
            <div className="container flex flex-wrap justify-between  items-center mx-auto max-w-7xl px-10">
                <ul className="flex ">
                    {
                        links.map(link => (
                            <li className="" key = {link.link}>
                                <Link className="text-white hover:text-slate-300 py-2 px-5 inline-block"  key = {link.link} to = {link.link}>{link.text}</Link>
                            </li>
                        ))
                    }
                </ul>

                <div className="flex gap-3">
                    <input className="w-full text-center max-w-xl mx-auto outline-none border-neutral-600 rounded-md border-2" type="text" name="" id="" onChange={e => setQuery(e.target.value.trim())} placeholder="Search Movie" />
                    <Button onClick={ () => handleSearch() } className="border-white border-2 text-white" type="button" label = "Search"/>
                </div>
            </div> 
        </nav>
    )
}

export default NavigationBar