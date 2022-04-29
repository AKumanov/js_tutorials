'use strict';

function getSecretNumber() {
    return Math.floor(Math.random() * 20) + 1;
}

const inputNumber = document.querySelector('.guess');
const checkBtn = document.querySelector('.check');
const paragraph = document.querySelector('.message');
const againBtn = document.querySelector('.again');
const docHighScore = document.querySelector('.highscore');
const finalNumber  = document.querySelector('.number');
const highscore = [];


let body = document.body;
const number = getSecretNumber();
console.log(number);

againBtn.addEventListener('click', () => {
    location.reload();
})
checkBtn.addEventListener('click', (e) => {

    if (Number(inputNumber.value) < 1 || Number(inputNumber.value) > 20) {
        paragraph.textContent = 'Please enter a number between 1 and 20';
        return;
    }
    console.log(`Secret number: ${number}`)

    if (Number(inputNumber.value) > number) {
        paragraph.textContent = 'Too high';
        updateScore();
    } else if (Number(inputNumber.value) < number) {
        paragraph.textContent = 'Too low';
        updateScore();
    } else {
        paragraph.textContent = 'Congratulations';
        body.style.backgroundColor = 'green';
        let score = document.querySelector('.score');
        finalNumber.textContent = number;
        highscore.push(Number(score.textContent));
    }
})

function updateScore() {
    let score = document.querySelector('.score');
    let currentScore = Number(score.textContent);
    currentScore -=1;
    score.textContent = currentScore;
}
console.log(checkBtn);
console.log(inputNumber);