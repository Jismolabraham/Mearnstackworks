var arr=[8,10,11,9,12,7,13];
// arr.sort();
arr.sort((num1,num2)=>num1 - num2)
// console.log(arr);
var low=0, up= arr.length-1;
var elem=9;
var flag=0;

// console.log(mid);
while(low<=up)
{
    let mid=Math.floor((low+up)/2);
    if(elem>arr[mid])
    {
        low=mid+1
    }
    else if(elem<arr[mid])
    {
        up=mid-1
    }
    else if (elem==arr[mid])
    {
        flag++
        break;
    }
}
if(flag==0)
{
    console.log(`not found`);
}
else{
    console.log('found');
}
// console.log((flag==0?"nt found":"found"));