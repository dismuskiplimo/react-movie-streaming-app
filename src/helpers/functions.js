export const queryResults = (link, tmdb, setResults, setPages, setResultsCount) => {
    // fetch from imdb
    fetch(`${link}`, {
        headers: {
            "Authorization" : `Bearer ${tmdb.readAccessToken}`,
            "Accept": "application/json",
        }
    })
    .then(response => response.json())
    .then(response => {
        // updae states and render to page
        setResults(response.results);

        // update the pages array
        let p = [];

        for(let i = 1; i <= response.total_pages; i++){
            p.push(i);
        }
        
        setPages(p);
        setResultsCount(response.total_results);
    })
    .catch(e => console.log(e));
}