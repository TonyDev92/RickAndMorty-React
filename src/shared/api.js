import axios from "axios";

const APIHeaders = {
    'Accept' : 'aplication/json',
    'Content-Type' : 'aplication/json',
    'Access-Control-Allow-Origin' : '*'
}

export const API_CHARACTERS = axios.create({
    baseURL : process.env.REACT_APP_API_CHARACTERS,
    timeout : 10000,
    headers : APIHeaders
})

