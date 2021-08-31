import {useState, useEffect} from 'react';
import {TVsApi} from "../../api"

export function useTVDetail(id) {
    const [detailList, setDetailList] = useState([]);
    useEffect(() => {
        async function fetchTVDetail(){
            try{
                const {data} = await TVsApi.getDetail(id);
                setDetailList(data);
            } catch(e){
                console.log(e)
            }
        }
        fetchTVDetail();
    }, [])
    return {detailList}
}