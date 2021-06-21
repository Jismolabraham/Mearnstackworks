
var arr=[10,8,24,15,20,12,6];
var arr2=[25,30,67,14,90,89,10]
// arr.sort();
arr.sort((num1,num2)=>num1 - num2)
arr2.sort((num1,num2)=>num1 - num2)
console.log(arr);
var low=0, up= arr.length-1;
elem=15;
flag=0;

// console.log(mid);
while(low<up)
{
    var mid=Math.floor((low+up)/2);
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
// if(flag==0)
// {
//     console.log(`not found`);
// }
// else{
//     console.log('found');
// }
console.log((flag==0?"nt found":"found"));