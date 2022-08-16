import * as request from "./requester.js";

const baseUrl = 'http://localhost:3030/data';

export const getAllShoes = () => 
    request.get(`${baseUrl}/shoes?sortBy=_createdOn%20desc`)
        .then((shoes) => {
            return shoes;
        })

export const addShoe = (brand, model, imageUrl, release, designer, value) => 
    request.post(`${baseUrl}/shoes`, {brand, model, imageUrl, release, designer, value})
        .then((shoe) => {
            return shoe;
        })

export const getShoeById = (shoeId) =>
    request.get(`${baseUrl}/shoes/${shoeId}`)
        .then((shoe) => {
            return shoe;
        })

export const updateShoe = (brand, model, imageUrl, release, designer, value, shoeId) => 
    request.put(`${baseUrl}/shoes/${shoeId}`, {brand, model, imageUrl, release, designer, value})
        .then((shoe) => {
            return shoe;
        })

export const deleteShoe = (shoeId) => 
    request.del(`${baseUrl}/shoes/${shoeId}`)
        .then((res) => {
            console.log(res);
        })

export const getShoeByQuery = (query) => 
    request.get(`${baseUrl}/shoes?where=brand%20LIKE%20%22${query}%22`)
        .then((result) => {
            return result;
        })