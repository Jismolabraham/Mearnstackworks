var arr=['A','B','C','A','D','E','A','B','F','B','B','A','B'];
// arr.sort((i,j)=>i-j);
// var maxnum = 1, res = arr[0];
//         var count = 1;
         
//         for (let i = 1; i < arr.length; i++)
//         {
//             if (arr[i] == arr[i - 1])
//                 count++;
//             else
//             {
//                 if (count > maxnum)
//                 {
//                     maxnum = count;
//                     res = arr[i - 1];
//                 }
//                 count = 1;
//             }
//         }
     
//         // If last element is most frequent
//         if (count > maxnum)
//         {
//             maxnum = count;
//             res = arr[arr.length - 1];
//         }
     
//         console.log(res);
    
// var count = 1, tempCount;
//         var popular = arr[0];
//         var temp = 0;
//         for (let i = 0; i < (arr.length - 1); i++) {
//             temp = arr[i];
//             tempCount = 0;
//             for (var j = i+1; j < arr.length; j++) {
//                 if (temp == arr[j])
//                     tempCount++;
//             }
//             if (tempCount > count) {
//                 popular = temp;
//                 count = tempCount;
//             }
//         }
       
//     console.log(`${popular} ${count}`);

var count=1,popular=arr[0],temp=0,tempcount;
for (let i=0;i<arr.length-1;i++)
{
    temp=arr[i];
    tempcount=0;
    for(j=i+1;j<arr.length;j++)
    {
        if(temp == arr[j])
        {
            tempcount++
        }
    }
    if(tempcount>count)
    {
        popular=temp;
        count=tempcount;
    }
}
console.log(`${popular} ${count}`);