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


let body = document.body;
let number = getSecretNumber();

againBtn.addEventListener('click', () => {
    let score = document.querySelector('.score');
    if (Number(score.textContent > Number(docHighScore.textContent))) {
        docHighScore.textContent = score.textContent;;
    }
    score.textContent = 20;
    number = getSecretNumber();
    body.style.backgroundColor = '#222';
    inputNumber.value = '';
})
checkBtn.addEventListener('click', (e) => {

    
    if (Number(inputNumber.value) < 1 || Number(inputNumber.value) > 20) {
        paragraph.textContent = 'Please enter a number between 1 and 20';
        return;
    }
    console.log(`Secret number: ${number}`)

    if (Number(inputNumber.value) > number) {
        if (checkGameOver(Number(document.querySelector('.score').textContent))) {
        paragraph.textContent = 'Too high';
        updateScore();
    } else {
        paragraph.textContent = 'You lost';
        document.querySelector('.score').textContent = 0;
    }
    } else if (Number(inputNumber.value) < number) {
        if (checkGameOver(Number(document.querySelector('.score').textContent))) {
            paragraph.textContent = 'Too low';
            updateScore();
        } else {
            paragraph.textContent = 'You lost';
            document.querySelector('.score').textContent = 0;
        }
    } else {
        paragraph.textContent = 'Congratulations';
        body.style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        finalNumber.textContent = number;
    }
})

function checkGameOver(score) {
    return (score > 1);
}

function updateScore() {
    let score = document.querySelector('.score');
    let currentScore = Number(score.textContent);
    currentScore -=1;
    score.textContent = currentScore;
}
