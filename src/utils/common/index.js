import axios from "axios";

function withoutAuth() {
    console.log(process.env.REACT_APP_API_URL)
    return axios.create({
        baseURL: process.env.REACT_APP_API_URL,
    });
}


export const withoutAuthInstance = withoutAuth();