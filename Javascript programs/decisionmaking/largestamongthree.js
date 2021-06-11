var num1=20, num2=20,numb3=20;
if (num1>num2 & num1>numb3)
{
console.log(`largest number is${num1}`);
}
else if(num2>num1 & num2>numb3)
{
    console.log(`largest number is ${num2}`);
}
else if(numb3>num1 & numb3>num2)
{
    console.log(`largest number is ${numb3}`);
}
else{
    console.log("all numbers are equal");
}