var num1 = 7;
var flag = 0
for (let i = 2; i < num1; i++) {
    if (num1 % i == 0) {
        flag += 1

    }
}
if (flag != 0) {
    console.log("the number is not a prime number");

}
else { 

console.log("number is a prime number");
}

