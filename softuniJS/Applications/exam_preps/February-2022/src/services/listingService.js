import * as request from "./requester.js";

const baseUrl = 'http://localhost:3030/data'

export const getAllListings = () => 
    request.get(`${baseUrl}/cars?sortBy=_createdOn%20desc`)
        .then(res => {
            console.log(res);
        })