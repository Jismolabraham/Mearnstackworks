var arr1=[101,120,13,40,48,10,9];
var arr2=[9,10,8,13];
var arr3=[];
arr1.sort((num1,num2)=>num1 - num2);//10,13,40,48120
arr2.sort((num1,num2)=>num1 - num2);//8,9,10,25,30
// console.log(arr1);
// console.log(arr2);
for(let value of arr1)
{
    let low=0, up=arr2.length-1;//
    while(low<=up)
      {
        let mid=Math.floor((low+up)/2);//10
        // var mid=Math.floor((low+up)/2);
        if(value>arr2[mid])//10>10
        {
            low=mid+1;
        }
        else if(value<arr2[mid])//10<10
        {
            up=mid-1
        }
        else if(value == arr2[mid])
        {
           arr3.push(value);
           break;
        }
    }
}
    console.log(`common elements are :${arr3}`);


// }
// console.log(`common elemnts are ${arr3}`);
// var arr1=[101,120,13,40,48];
// var arr2=[9,10,8,13,25];
// arr1.sort((num1,num2)=>num1 - num2)
// arr2.sort((num1,num2)=>num1 - num2)

// // var arr=[10,8,24,15,20,12,6];
// var arr3=[];
// // arr.sort();
// for(let i=0;i<=arr1.length-1;i++){

// // console.log(arr);
// var low=0, up= arr2.length-1;
// elem=arr1[i];
// console.log(elem);
// flag=0;

// // console.log(mid);
// while(low<up)
// {
//     var mid=Math.floor((low + up)/2);
//     console.log(mid);
//     if(elem>arr2[mid])
//     {
//         low=mid+1
//     }
//     else if(elem<arr2[mid])
//     {
//         up=mid-1
//     }
//     else if (elem==arr2[mid])
//     {
//         arr3.push(elem)
//         // break;
//     }
// }
// }
// console.log(arr3);
// var arr=[9,8,10,17];
// var arr2=[10,11,12,13,14,15,17];
// arr.sort((i,j)=>i-j);
// arr2.sort((num1,num2)=>num1-num2);
// console.log(arr);
// console.log(arr2);
// // var arr=[10,8,24,15,20,12,6];
// // arr.sort();
// // arr.sort((num1,num2)=>num1 - num2)
// // console.log(arr);
// var low=0, up= arr2.length-1;
// // console.log(low,up);
// var elem=arr[2];;
// var flag=0;

// // console.log(mid);
// while(low<up)
// {
//     var mid=Math.floor((low+up)/2);
//     console.log(mid);
//     if(elem>arr2[mid])
//     {
//         low=mid+1
//     }
//     else if(elem<arr2[mid])
//     {
//         up=mid-1
//         // console.log(up);
//         console.log(elem,arr2[mid])
//     }
//     else if (elem==arr2[mid])
//     {
//         flag++
//         break;
//     }
// }
// if(flag!=0)
// {
//     console.log(`present`);
// }
// else
// {
//     console.log(`not present`);
// }