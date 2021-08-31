import axios from "axios";

const api = axios.create({ 
    baseURL: "https://api.themoviedb.org/3/",
    params : {
        api_key : "0c74f98a0552a51b613e8834cc4b0773",
        language : "en-US"
    }
});

export const moviesApi = {
    getPopular : ()=>api.get("movie/popular"),
    getNowPlaying : ()=>api.get("movie/now_playing"),
    getTop : ()=>api.get("movie/top_rated"),
    getDetail : (id)=>api.get(`movie/${id}`)
}

export const TVsApi = {
    getPopular : ()=>api.get("tv/popular"),
    getOnTheAir : ()=>api.get("tv/on_the_air"),
    getTop : (page=1)=>api.get("tv/top_rated", {params : {page}}),
    getDetail : (id)=>api.get(`tv/${id}`)
}

export const SearchApi = {
    getResult : (name)=>api.get("search/movie", {params : {query : name}})
}