'use strict';

let dice = document.querySelector('.dice');

function rollNumber() {
    return Math.floor(Math.random() * 6);
}

function changeDice(num) {
    dice.src = `dice-${num}.png`;
}

const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
const newBtn = document.querySelector('.btn--new');

newBtn.addEventListener('click', () => {
    location.reload();
})

holdBtn.addEventListener('click', () => {
    // update scores
    const currentPlayerSection = document.querySelector('.player--active');
    let totalScore = currentPlayerSection.childNodes[3];

    

    let currentPlayerScore = currentPlayerSection.childNodes[5].childNodes[3];
    const newScore = Number(currentPlayerScore.textContent) + Number(totalScore.textContent);
    totalScore.textContent = newScore;
    // reset current score
    currentPlayerScore.textContent = 0;

    // change active player
    const players = document.querySelectorAll('.player');
    if (players[0].classList.contains('player--active')) {
        players[0].classList.remove('player--active');
        players[1].classList.add('player--active');
    } else {
        players[1].classList.remove('player--active');
        players[0].classList.add('player--active');
    }

    if (Number(totalScore.textContent) >= 20) {
        if (players[0].classList.contains('player--active')) {
            players[0].classList.add('player--winner');
        } else {
            players[1].classList.add('player--winner');
        }
        rollBtn.style.display = 'none';
        holdBtn.style.display = 'none';
    }
})


rollBtn.addEventListener('click', () => {
    let number = rollNumber() + 1;
    changeDice(number);
    const currentPlayerSection = document.querySelector('.player--active');

    //TODO: add logic to win the game when score >= 100;
    const totalScore = currentPlayerSection.childNodes[3];
    
    
    
    if (number !== 1) {
    let currentPlayerScore = currentPlayerSection.childNodes[5].childNodes[3];
    const newScore = Number(currentPlayerScore.textContent) + number;
    currentPlayerScore.textContent = newScore; 
    
    } else {
        const currentPlayerSection = document.querySelector('.player--active');
        currentPlayerSection.childNodes[5].childNodes[3].textContent = 0;
        const players = document.querySelectorAll('.player');
        if (players[0].classList.contains('player--active')) {
            players[0].classList.remove('player--active');
            players[1].classList.add('player--active');
        } else {
            players[1].classList.remove('player--active');
            players[0].classList.add('player--active');
        }
        
    }
    if (Number(totalScore.textContent) >= 20) {
        if (players[0].classList.contains('player--active')) {
            players[0].classList.add('player--winner');
        } else {
            players[1].classList.add('player--winner');
        }

        rollBtn.style.display = 'none';
        holdBtn.style.display = 'none';
    }

})