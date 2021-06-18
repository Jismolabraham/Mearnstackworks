var arr=[10,8,24,15,20,12,6];
// arr.sort();
arr.sort((num1,num2)=>num1 - num2)
console.log(arr);
var low=0, up= arr.length-1;
elem=12;
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