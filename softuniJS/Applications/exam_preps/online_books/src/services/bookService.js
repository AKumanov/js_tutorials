import * as request from "./requester.js";

const baseUrl = 'http://localhost:3030/data/books';

export const addBook = (title, description, imageUrl, type) => 
    request.post(`${baseUrl}`, {title, description, imageUrl, type})
        .then((book) => {
            return book;
        })

export const getAllBooks = () => 
    request.get(`${baseUrl}?sortBy=_createdOn%20desc`)
        .then((books) => {
            return books;
        })

export const getBookById = (bookId) => 
    request.get(`${baseUrl}/${bookId}`)
        .then((book) => {
            return book;
        })

export const updateBook = (title, description, imageUrl, type, bookId) => 
    request.put(`${baseUrl}/${bookId}`, {title, description, imageUrl, type})
        .then((book) => {
            return book;
        })

export const deleteBook = (bookId) =>
    request.del(`${baseUrl}/${bookId}`)
        .then((res) => {
            return res;
        })


export const getBooksByAuthorId = (authorId) => 
    request.get(`${baseUrl}/?where=_ownerId%3D%22${authorId}%22&sortBy=_createdOn%20desc`)
        .then((books) => {
            return books
        })