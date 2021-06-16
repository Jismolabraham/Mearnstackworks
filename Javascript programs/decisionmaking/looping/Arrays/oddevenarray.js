var arr=[10,11,12,13,14,15,16,17,18,19,20]
var odd=[],even=[];
for(value of arr){
    if(value%2==0){
        even.push(value);
    }
    if(value%2!=0){
        odd.push(value);
    }
}
console.log(`even numbers are ${even}`);
console.log(`odd numbers are ${odd}`);