import * as request from "./requester.js";

const baseUrl = 'http://localhost:3030/data/posts';

export const getAllPosts = () => 
    request.get(`${baseUrl}?sortBy=_createdOn%20desc`)
        .then((posts) => {
            return posts;
        })

export const createPost = (title, description, imageUrl, address, phone) => 
    request.post(`${baseUrl}`, {title, description, imageUrl, address, phone})
        .then((post) => {
            return post;
        })

export const getPostById = (postId) =>
    request.get(`${baseUrl}/${postId}`)
        .then((post) => {
            return post;
        })

export const updatePost = (title, description, imageUrl, address, phone, postId) => 
    request.put(`${baseUrl}/${postId}`, {title, description, imageUrl, address, phone})
        .then((post) => {
            return post;
        })

export const deletePost = (postId) => 
    request.del(`${baseUrl}/${postId}`)
        .then((res) => {
            return res;
        })

export const getPostsByAuthorId = (userId) =>
    request.get(`${baseUrl}?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
        .then((posts) => {
            return posts;
        })

export const donate = (postId) =>
    request.post(`http://localhost:3030/data/donations`, {postId})
        .then((donation) => {
            return donation;
        })

export const getPostDonations = (postId) => 
    request.get(`http://localhost:3030/data/donations?where=postId%3D%22${postId}%22&distinct=_ownerId&count`)
        .then((donations) => {
            return donations;
        })

export const getPostDonationsByUser = (postId, userId) =>
    request.get(`http://localhost:3030/data/donations?where=postId%3D%22${postId}%22%20and%20_ownerId%3D%22${userId}%22&count`)
        .then((result) => {
            return result;
        })