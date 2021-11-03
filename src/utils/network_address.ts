export const API_KEY = 'b864df85a849c092abeb6c585a550aa4';
export const BASE_URL = 'https://api.themoviedb.org/3';
export const NETFLIX_ORIGINALS = `/discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`;
export const NETFLIX_TRENDING = `/trending/all/week?language=pt-BR&api_key=${API_KEY}`;
export const NETFLIX_TOP = `/movie/top_rated?language=pt-BR&api_key=${API_KEY}`;
export const NETFLIX_ACTION = `/discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`;
export const NETFLIX_COMEDY = `/discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`;
export const NETFLIX_HORROR = `/discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`;
export const NETFLIX_ROMANCE = `/discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`;
export const NETFLIX_DOCUMENTARY = `/discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`;
export const MOVIE_BY_ID = (movieId: string) => `/movie/${movieId}?language=pt-BR&api_key=${API_KEY}`;
export const SERIE_BY_ID = (serieId: string) => `/tv/${serieId}?language=pt-BR&api_key=${API_KEY}`;
export const IMG_ROW = `https://image.tmdb.org/t/p/w300`;