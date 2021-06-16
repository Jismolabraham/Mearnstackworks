var arr=[23,23,12,40,29,10,40,0];
var small=arr[0];
for (let value of arr){
    if(value<small)
    {
        small=value;
    }
}
console.log(`the smallest number is ${small}`);