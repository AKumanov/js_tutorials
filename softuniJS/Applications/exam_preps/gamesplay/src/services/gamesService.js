import * as request from "./requester.js";

const baseUrl = 'http://localhost:3030/data'

export const getAllGames = () => 
    request.get(`${baseUrl}/games?sortBy=_createdOn%20desc`)
        .then((response) => {
            return response;
        })

export const getRecentGames = () => 
    request.get(`${baseUrl}/games?sortBy=_createdOn%20desc&distinct=category`)
        .then(games => {
            return games;
        })

export const createGame = (title, category, maxLevel, imageUrl, summary) =>
    request.post(`${baseUrl}/games`, {title, category, maxLevel, imageUrl, summary})
        .then(() => {
            return;
        })

export const getGame = (gameId) => 
        request.get(`${baseUrl}/games/${gameId}`)
            .then(game => {
                return game;
            })

export const updateGame = (title, category, maxLevel, imageUrl, summary, gameId) =>
        request.put(`${baseUrl}/games/${gameId}`, {title, category, maxLevel, imageUrl, summary})
            .then((game) => {
                return game;
            })


export const deleteGame = (gameId) => 
    request.del(`${baseUrl}/games/${gameId}`)
        .then((res) => {
            console.log(res);
        })
    

export const loadComments = (gameId) => 
        request.get(`${baseUrl}/comments?where=gameId%3D%22${gameId}%22`)
            .then(comments => {
                console.log(comments);
                return comments;
            })

export const addComment = (gameId, comment) => 
        request.post(`${baseUrl}/comments`, {gameId, comment})
            .then(comment => {
                return comment;
            })