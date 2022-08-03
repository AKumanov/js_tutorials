import * as request from "./requester.js";

const baseUrl = 'http://localhost:3030/users';

const saveUser = (user) => {
    localStorage.setItem('user', JSON.stringify(user));
}

const delUser = () => {
    localStorage.removeItem('user');
}

export const getUser = () => {
    let serializedUser = localStorage.getItem('user');

    if (serializedUser) {
        let user = JSON.parse(serializedUser);
        return user;
    }
}

export const getToken = () => {
    let serializedUser = localStorage.getItem('user');

    if (serializedUser) {
        let user = JSON.parse(serializedUser);
        return user.accessToken;
    }
}


export const login = (email, password) => 
    request.post(`${baseUrl}/login`, {email, password})
        .then((user) => {
            if(user.hasOwnProperty('code')) {
                alert(user.message);
                return user;
            }
            saveUser(user);

            return user;
        })

export const register = (email, password) => 
    request.post(`${baseUrl}/register`, {email, password})
        .then((user) => {
            if(user.hasOwnProperty('code')) {
                alert(user.message);
                return user;
            }
            saveUser(user);

            return user;
        })

export const logout = () => 
    fetch(`${baseUrl}/logout`, {headers: {'X-Authorization': getToken()}})
        .then(() => {
            delUser();
        })

