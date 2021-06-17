var arr=[1,21,13,4,56,16,75,8,9,110,11,12]
var cnt=0;
// for (let i=0;i<arr.length;i++)
// {
//     for (let j=1;j<arr.length;j++)
//     {
//         cnt++;
//         if (arr[i]+arr[j] == 12 & arr[i]!=arr[j])
//         {
//             console.log(arr[i] +" and " + arr[j]);
//         }
//     }
// }
// console.log(cnt);

arr.sort((i,j)=> i-j)
console.log(arr);
var elem=12;
var low=0, upp=arr.length-1;
while(low<upp){
    let total=arr[low]+arr[upp];
    if(elem==total){
        console.log(`pairs ${arr[low]} ${arr[upp]}`);
        low++;
    }
    else if (elem>total){
        low=low+1;
    }
    else if(elem<total){
        upp=upp-1;
    }
}