export const queryResults = (link, tmdb, results, setResults, setPages, setResultsCount) => {
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
        setResults([...results, ...response.results]);
        setPages(response.total_pages);
        setResultsCount(response.total_results);
    })
    .catch(e => console.log(e));
}