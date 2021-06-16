var arr=[3,4,5]
var oparr=[];
var sum=0;
for (let num of arr){
    sum+=num;
}

for(let num of arr)
{
    oparr.push(sum-num);
}
console.log(oparr);
