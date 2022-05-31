function subtract() {
    const firstNumber = Number(document.querySelector("#firstNumber").value)
    const secondNumber = Number(document.querySelector("#secondNumber").value);
    const resultEl = document.getElementById("result");
    resultEl.textContent = firstNumber - secondNumber;
}