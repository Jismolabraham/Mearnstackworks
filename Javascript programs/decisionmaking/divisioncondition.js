var num= 29;
var result="";
if (num%3 == 0){
    result+="fiz"
}
if(num%5 == 0){
    result+="buz"
}
if(num%15==0){
    result+="buzzzzz"
}
// else{
//     console.log("the num is not divisible by any of these numbers");
// }
console.log(result);