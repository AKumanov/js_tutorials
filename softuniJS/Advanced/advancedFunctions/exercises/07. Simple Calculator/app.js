function calculator() {
    let num1 = null;
    let num2 = null;
    let result = null;

    return {
        add,
        init,
        subtract,
    }

    function init(selector1, selector2, resultElement) {
        num1 = document.querySelector(selector1);
        num2 = document.querySelector(selector2);
        result = document.querySelector(resultElement);
    }

    function add() {
        result.value = (Number(num1.value) + Number(num2.value));
    }

    function subtract() {
        result.value = (Number(num1.value) - Number(num2.value));
    }
    
}
