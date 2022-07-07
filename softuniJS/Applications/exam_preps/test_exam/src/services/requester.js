import * as authService from "./authService.js";

const request = (method, url, data) => {
    let options = {};
    let token = authService.getToken();

    if (method !== 'GET') {
        options.method = method;
        options.headers = {
            'content-type': 'application/json'
        };
        options.body = JSON.stringify(data);

        if(token) {
            options.headers['X-Authorization'] = token
        }
        
    }

    return fetch(url, options).then(res => res.json());

}

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const put = request.bind({}, 'PUT');
export const del = request.bind({}, 'DELETE');
export const patch = request.bind({}, 'PATCH');
