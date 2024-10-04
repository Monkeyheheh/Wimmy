const searchButton = document.getElementById('search-button');
const searchInput = document.getElementById('search-input');
const movieResults = document.getElementById('movie-results');

searchButton.addEventListener('click', async () => {
    const query = searchInput.value;
    if (query) {
        const response = await fetch(`http://www.omdbapi.com/?s=${encodeURIComponent(query)}&apikey=YOUR_OMDB_API_KEY`);
        const data = await response.json();
        displayResults(data.Search);
    }
});

function displayResults(movies) {
    movieResults.innerHTML = '';
    if (!movies) {
        movieResults.innerHTML = '<p>No movies found.</p>';
        return;
    }
    
    movies.forEach(movie => {
        const movieDiv = document.createElement('div');
        movieDiv.classList.add('movie-item');
        movieDiv.innerHTML = `
            <h3>${movie.Title} (${movie.Year})</h3>
            <p>${movie.Type}</p>
        `;
        movieResults.appendChild(movieDiv);
    });
}
