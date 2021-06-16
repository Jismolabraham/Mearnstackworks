var arr=[1,2,3,4,5,6,7,8,9,10,11,12]
for (let i=0;i<arr.length;i++)
{
    for (let j=1;j<arr.length;j++)
    {
        if (arr[i]+arr[j] == 12 & arr[i]!=arr[j])
        {
            console.log(arr[i] +" and " + arr[j]);
        }
    }
}