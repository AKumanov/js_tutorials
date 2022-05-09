let playerOne = document.getElementsByClassName('img1')[0];
let playerTwo = document.getElementsByClassName('img2')[0];

let arrWrap = [1, 2, 3, 4, 5, 6];

let firstPos = Math.floor(Math.random() * arrWrap.length);
let secondPos = Math.floor(Math.random() * arrWrap.length);

let target = document.getElementsByClassName('result')[0];

playerOne.setAttribute("src", `images/dice${arrWrap[firstPos]}.png`);
playerTwo.setAttribute("src", `images/dice${arrWrap[secondPos]}.png`);

if (firstPos > secondPos) {

    target.innerHTML = `
        <h1>Player One wins!</h1>
    `
} else if (secondPos > firstPos) {
    target.innerHTML = `
    <h1>Player Two wins!</h1>
`
} else {
    target.innerHTML = `
    <h1>It's a tie!</h1>
`
}
