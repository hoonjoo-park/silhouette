import {useState, useEffect} from 'react';
import {moviesApi} from "../../api"

export function usePopularMovies() {
    const [popularMovies, setPopularMovies] = useState([]);
    useEffect(() => {
        async function fetchPopularMovies(){
            const {data : {results}} = await moviesApi.getPopular();
            setPopularMovies(results);
        }
        fetchPopularMovies();
    }, [])
    return {popularMovies};
};