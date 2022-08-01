import * as request from "./requester.js";

const baseUrl = 'http://localhost:3030/data/memes'

export const createMeme = (title, description, imageUrl) => 
    request.post(`${baseUrl}`, {title, description, imageUrl})
        .then((meme) => {
            if (meme.hasOwnProperty('code')) {
                alert(meme.message);
                return;
            }
            return meme;
        })

export const getAllMemes = () => 
    request.get(`${baseUrl}?sortBy=_createdOn%20desc`)
        .then((memes) => {
            return memes;
        })

export const getMemeById = (id) => 
    request.get(`${baseUrl}/${id}`)
        .then((meme) => {
            return meme;
        })

export const editMeme = (title, description, imageUrl, memeId) =>
    request.put(`${baseUrl}/${memeId}`, {title, description, imageUrl})
        .then((meme) => {
            return meme;
        })

export const deleteMeme = (memeId) => 
    request.del(`${baseUrl}/${memeId}`)
        .then((res) => {
            console.log(res);
        })

export const getMemesByAuthorId = (authorId) =>
    request.get(`${baseUrl}?where=_ownerId%3D%22${authorId}%22&sortBy=_createdOn%20desc`)
        .then((memes) => {
            return memes;
        })