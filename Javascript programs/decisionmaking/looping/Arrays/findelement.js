var arr=[10,9,8,10,17];
arr.sort((i,j)=>i-j);
console.log(arr);
var low=arr[0], up=arr.length-1;
var element=17;
var flag=0;
var cnt=0;
for (let num of arr)
{
    if(element==num)
    {
        flag++;
        break;
    }
   cnt++; 
 
}

if(flag!=0)
{
    console.log(`the given element is present`);
}
else
{
    console.log(`the given element is not present`);
}
console.log(cnt);