function sameNumber(number) {
    let num = String(number);
    let result = true;
    let sum = 0;
    for (let i=0; i<num.length - 1; i++) {
        if(!(num[i] === num[i + 1])) {
            result = false;
        }
        sum += Number(num[i]); 
    }
    sum += Number(num.charAt(num.length - 1));
    console.log(result);
    console.log(sum);
}

sameNumber(2222222);
sameNumber(1234);
