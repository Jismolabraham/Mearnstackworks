// var flag = 0;
var low = 21, up = 40;

for (let i = low; i <= up; i++) {
    let flag = 0;
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag++;
            break;
        }

    }
    if (flag == 0) {
        console.log(i);
    }
}