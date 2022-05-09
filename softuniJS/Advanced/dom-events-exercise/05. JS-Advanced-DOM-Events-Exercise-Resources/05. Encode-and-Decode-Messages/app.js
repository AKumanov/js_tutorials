function encodeAndDecodeMessages() {
    let encodeBtn = document.querySelectorAll('div button')[0];
    encodeBtn.addEventListener('click', encode);

    let decodeBtn = document.querySelectorAll('div button')[1];
    decodeBtn.addEventListener('click', decode);
    // console.log('TODO...')


    function decode() {
        let encodedText = document.querySelectorAll('div textarea')[1];
        let decodedMessage = '';
        for (let char of encodedText.value) {
            let newChar = String.fromCharCode(char.charCodeAt(0) - 1);
            decodedMessage += newChar;
        }
        encodedText.value = decodedMessage;
    }

    function encode() {
        let message = document.querySelectorAll('div textarea')[0];

        let textArea = document.querySelectorAll('div textarea')[1];

        let encodedMessage = '';
        for (let char of message.value) {
        let newChar = String.fromCharCode(char.charCodeAt(0) + 1);
        encodedMessage += newChar;
        }
        message.value = "";
        textArea.textContent = encodedMessage;
    }
}

