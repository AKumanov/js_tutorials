import * as request from "./requester.js";

const baseUrl = 'http://localhost:3030/users'


const saveUser = (user) => {
    if(user.accessToken) {
        localStorage.setItem('user', JSON.stringify(user))

    }
}

export const getUser = () => {
    let user =  localStorage.getItem('user');
    return JSON.parse(user);
}

const delUser = () => {
    const user = getUser()
    if (user) {
        localStorage.removeItem('user');
    }
}

export const getToken = () => {
    const serializedUser =  localStorage.getItem('user')
    if (serializedUser) {
        let user = JSON.parse(serializedUser)
        return user.accessToken;
    }
}


export const login = (email, password) => 
    request.post(`${baseUrl}/login`, {email, password})
        .then((user) => {
            console.log(user);
            saveUser(user)

            return user;
        });

export const register = (email, password) => 
        request.post(`${baseUrl}/register`, {email, password})
            .then((user) => {
                saveUser(user)

                return user;
            })

export const logout = () =>
    fetch(`${baseUrl}/logout`, { headers: {'X-Authorization': getToken()}})
        .then(() => {
            delUser();
        })
        
