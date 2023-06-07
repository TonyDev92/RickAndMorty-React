import axios from "axios";
import {API_LOCATIONS } from "../../shared/api";


export const getCharacters = (page) => async(dispatch) => {
    dispatch({ type: "FETCH_DATA"})

    try {
        const results = await axios.get(`${process.env.REACT_APP_API_CHARACTERS}${page}`);
        dispatch({ type: "FETCH_DATA_OK", payload: results.data})
        dispatch(setData(results.data.results));
    } catch (error) {
        dispatch({type : "FETCH_DATA_KO", payload : error})
    }
}


export const setData = (data) => {
    return {
        type: "DATA",
        payload: data
    }
}