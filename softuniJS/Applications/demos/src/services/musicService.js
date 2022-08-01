import * as request from "./requester.js";

const baseUrl = 'http://localhost:3030/data'

export const getAllAlbums = () => 
    request.get(`${baseUrl}/albums?sortBy=_createdOn%20desc&distinct=name`)
        .then((albums) => {
            return albums;
        })

export const createAlbum = (name, imgUrl, price, releaseDate, artist, genre, description) => 
    request.post(`${baseUrl}/albums`, {name, imgUrl, price, releaseDate, artist, genre, description})
        .then((album) => {
            console.log(album);
        })


export const getAlbumById = (albumId) => 
    request.get(`${baseUrl}/albums/${albumId}`)
        .then((album) => {
            return album;
        })

export const editAlbum = (name, imgUrl, price, releaseDate, artist, genre, description, albumId) => 
    request.put(`${baseUrl}/albums/${albumId}`, {name, imgUrl, price, releaseDate, artist, genre, description})
        .then((album) => {
            return album;
        })

export const deleteAlbum = (albumId) =>
    request.del(`${baseUrl}/albums/${albumId}`)
        .then((res) => {
            console.log(res);
        })

export const searchAlbum = (query) => 
    request.get(`${baseUrl}/albums?where=name%20LIKE%20%22${query}%22`)
        .then(album => {
            return album;
        })