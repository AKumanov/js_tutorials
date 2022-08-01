import * as request from "./requester.js";

const baseUrl = 'http://localhost:3030/data'

export const createBook = (title, description, imageUrl, type) =>
    request.post(`${baseUrl}/books`, {title, description, imageUrl, type})
        .then((book) => {
            console.log(book);
        })

export const getAllBooks = () => 
    request.get(`${baseUrl}/books?sortBy=_createdOn%20desc`)
        .then((books) => {
            return books;
        })

export const getOneBook = (bookId) => 
    request.get(`${baseUrl}/books/${bookId}`)
        .then((book) => {
            return book;
        }) 


export const updateBook = (title, description, imageUrl, type, bookId) => 
    request.put(`${baseUrl}/books/${bookId}`, {title, description, imageUrl, type})
        .then((book) => {
        })

export const deleteBook = (bookId) => 
    request.del(`${baseUrl}/books/${bookId}`)
        .then((res) => {
            console.log(res);
        })

export const getMyBooks = (userId) =>
    request.get(`${baseUrl}/books?where=_ownerId%3D%22${userId}%22&sortBy=_createdOn%20desc`)
        .then((books) => {
            return books;
        })