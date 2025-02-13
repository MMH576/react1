const API_KEY = "c24eabbef01dc7ffc9f08904200fc319"
const BASE_URL = "https://www.themoviedb.org/"

export const getPopularMovies = async() => {
    const response = await fetch(
        `${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json();
    return data.results;
}

export const searchMovies = async() => {
    const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
            query
        )}`);
    const data = await response.json();
    return data.results;
}