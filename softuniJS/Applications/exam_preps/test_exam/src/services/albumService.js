import * as request from "./requester.js";

const baseUrl = 'http://localhost:3030/data';


export const getAllAlbums = () => 
    request.get(`${baseUrl}/albums?sortBy=_createdOn%20desc&distinct=name`)
        .then((data) => {
            return data;
        })


export const createAlbum = (formData) => 
        request.post(`${baseUrl}/albums`, formData)
            .then((data) => {
                return;
            })

export const detailAlbum = (albumId) => 
        request.get(`${baseUrl}/albums/${albumId}`)


export const deleteAlbum = (albumId) => 
        request.del(`${baseUrl}/albums/${albumId}`)
            .then((res) => {
                console.log(res);
            })

export const getAlbumById = (albumId) => 
        request.get(`${baseUrl}/albums/${albumId}`)
            .then((album) => {
                return album;
            })


export const updateAlbum = (albumId, formData) =>
        request.put(`${baseUrl}/albums/${albumId}`, formData)
            .then((album) => {
                return album;
            })

export const getAlbumByQuery = (query) =>
        request.get(`${baseUrl}/albums?where=name%20LIKE%20%22${query}%22`)
            .then((result) => {
                return result;
            })