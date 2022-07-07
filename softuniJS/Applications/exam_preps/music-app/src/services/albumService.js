import * as request from './requester.js';
import * as authService from "./authService.js"

const baseUrl = 'http://localhost:3030/data'


export const getAllAlbums = () => 
    request.get(`${baseUrl}/albums?sortBy=_createdOn%20desc&distinct=name`)
        .then(some => {
            return some;
        })

export const createAlbum = (formData) => {
    return fetch(`${baseUrl}/albums`, {
        method: "POST",
        headers: {
            'content-type': 'application/json',
            'X-Authorization': authService.getUser().accessToken,
        },
        body: JSON.stringify(formData)
    })
    .then(res => res.json());
}

export const getOneAlbum = (albumId) => request.get(`${baseUrl}/albums/${albumId}`);

export const editAlbum = (albumId, albumData) => request.put(`${baseUrl}/albums/${albumId}`, albumData);

export const deleteAlbum = (albumId) => request.del(`${baseUrl}/albums/${albumId}`);

export const searchAlbum = (query) => request.get(`${baseUrl}/albums?where=name%20LIKE%20%22${query}%22`);