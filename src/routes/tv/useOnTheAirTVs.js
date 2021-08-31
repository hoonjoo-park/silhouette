import {useState, useEffect} from 'react';
import {TVsApi} from "../../api"

export function useOnTheAirTVs() {
    const [onTheAirTVs, setOnTheAirTVs] = useState([]);
    useEffect(() => {
        async function fetchOnTheAirTVs(){
            try{
                const {data : {results}} = await TVsApi.getOnTheAir();
                setOnTheAirTVs(results.slice(0,5));
            } catch(e){
                console.log(e)
            }
        }
        fetchOnTheAirTVs();
    }, [])
    return {onTheAirTVs}
};