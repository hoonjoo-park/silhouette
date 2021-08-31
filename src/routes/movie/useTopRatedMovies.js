import {useState, useEffect} from 'react';
import {moviesApi} from "../../api"

export function useTopRatedMovies() {
    const [topMovies, setTopMovies] = useState([]);
    useEffect(()=>{
        async function fetchTopMovies(){
            try{
                const {data : {results}} = await moviesApi.getTop();
                setTopMovies(results)
            } catch(e){
                console.log(e)
            }
        }
        fetchTopMovies();
    },[]);
    return {topMovies}
}

export default useTopRatedMovies
