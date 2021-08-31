import {useState, useEffect} from 'react';
import {TVsApi} from "../../api"

export function useTopRatedTVs() {
    const [topTVs, setTopTVs] = useState([]);
    useEffect(()=>{
        async function fetchTopTVs(){
            try{
                const {data : {results}} = await TVsApi.getTop();
                setTopTVs(results)
            } catch(e){
                console.log(e)
            }
        }
        fetchTopTVs();
    },[]);
    return {topTVs}
}

export default useTopRatedTVs
