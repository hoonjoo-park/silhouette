import {useState, useEffect} from 'react';
import {moviesApi} from "../../api"

export function useNowPlayingMovies() {
    const [nowPlayingMovies, setNowPlayingMovies] = useState([]);
    useEffect(() => {
        async function fetchNowPlayingMovies(){
            try{
                const {data : {results}} = await moviesApi.getNowPlaying();
                setNowPlayingMovies(results.slice(0,5));
            } catch(e){
                console.log(e)
            }
        }
        fetchNowPlayingMovies();
    }, [])
    return {nowPlayingMovies}
};