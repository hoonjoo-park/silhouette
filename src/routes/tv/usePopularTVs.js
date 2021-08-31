import {useState, useEffect} from 'react';
import {TVsApi} from "../../api"

export function usePopularTVs() {
    const [popularTVs, setPopularTVs] = useState([]);
    useEffect(() => {
        async function fetchPopularTVs(){
            const {data : {results}} = await TVsApi.getPopular();
            setPopularTVs(results);
        }
        fetchPopularTVs();
    }, [])
    return {popularTVs};
};