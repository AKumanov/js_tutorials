// // OPTION 1
// let located = document.querySelectorAll('.drum');
// let audio = null;
// located.forEach(current => {
//     current.addEventListener('click', function () {
//         console.log(this)
//         if (current.textContent == 'w') {
//             audio = new Audio('sounds/tom-1.mp3')
            
//         } else if(current.textContent == 'a') {
//             audio = new Audio('sounds/tom-2.mp3')
//         } else if (current.textContent == 's') {
//             audio = new Audio('sounds/tom-3.mp3')

//         } else if (current.textContent == 'd') {
//             current.style
//             audio = new Audio('sounds/tom-4.mp3')

//         } else if (current.textContent == 'j') {
//             audio = new Audio('sounds/crash.mp3')

//         } else if (current.textContent == 'k') {
//             audio = new Audio('sounds/kick-bass.mp3')
            
//         } else if (current.textContent == 'l') {
//             audio = new Audio('sounds/snare.mp3')
//         }

//         audio.play();
//     })
// })

// OPTION 2

let numberOfDrumButtons = document.querySelectorAll('.drum').length

for (let i = 0; i < numberOfDrumButtons; i++) {
    document.querySelectorAll('.drum')[i].addEventListener('keypress', function (event) {
        buttonAnimation(event.key);
        switch (event.key) {
            
            case "w":
                let tom1 = new Audio('sounds/tom-1.mp3');
                tom1.play()
                break;
            case "a":
                let tom2 = new Audio('sounds/tom-2.mp3');
                tom2.play()
                break
            case "s":
                let tom3 = new Audio('sounds/tom-3.mp3');
                tom3.play()
                bre4k
            case "d":
                let tom4 = new Audio('sounds/tom-4.mp3');
                tom4.play()
                break
            case "j":
                let snare = new Audio('sounds/snare.mp3');
                snare.play()
                break
            case "k":
                let crash = new Audio('sounds/crash.mp3');
                crash.play()
                break
            case "l":
                let kickBase = new Audio('sounds/kick-bass.mp3');
                kickBase.play()
                break
            
            default:
                console.log(buttonInnterHTML);
        }
    });
};

function buttonAnimation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add('pressed');
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
};