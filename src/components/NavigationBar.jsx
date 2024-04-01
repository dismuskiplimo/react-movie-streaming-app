import { Link } from "react-router-dom"

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
    ];
    return (
        <nav className="w-full">
            <div className="container mx-auto max-w-7xl">
                <ul>
                    {
                        links.map(link => (
                            <Link key = {link.link} to = {link.link}>{link.text}</Link>
                        ))
                    }
                </ul>
            </div> 
        </nav>
    )
}

export default NavigationBar