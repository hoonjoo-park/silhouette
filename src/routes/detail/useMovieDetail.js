import {useState, useEffect} from 'react';
import {moviesApi} from "../../api"

export function useMovieDetail(id) {
    const [detailList, setDetailList] = useState([]);
    useEffect(() => {
        async function fetchMovieDetail(){
            try{
                const {data} = await moviesApi.getDetail(id);
                setDetailList(data);
            } catch(e){
                console.log(e)
            }
        }
        fetchMovieDetail();
    }, [])
    return {detailList}
}
