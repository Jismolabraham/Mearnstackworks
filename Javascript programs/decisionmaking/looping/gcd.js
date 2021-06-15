var num1 = 68, num2 = 24;
var factor=0;
// for (let count = 1; count <= num1; count++) {
    for (let i = 2; i <= num1 & i<=num2; i++) {
        if (num1 % i == 0 & num2 % i == 0) {
            factor = i;
        }
    }
    console.log(`the heighest common factor is ${factor}`);
// }