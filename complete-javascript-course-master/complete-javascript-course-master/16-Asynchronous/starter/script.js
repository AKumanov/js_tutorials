'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////


fetch('https://swapi.dev/api/peopla/4')
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.name);
    
    })
    .catch(error => console.log(error))