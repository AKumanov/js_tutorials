function commonDivisor(num1, num2) {
    if (num1 && num2) {
        let divisor = 0;
        for (let num = 0 ; num < Math.max(num1, num2); num++) {
            if (num1 % num == 0 && num2 % num == 0) {
                divisor = num;
            }
        }
    console.log(divisor);
    }
}



commonDivisor(15, 5);
commonDivisor(2154, 458);
commonDivisor(15, 0);