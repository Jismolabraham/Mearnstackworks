var arr=[10,11,129,13,14,129,16,176,18,19,20];
var high=arr[0];
for (let value of arr)
{
    if (value>=high)
    {
        high=value;
    }
}
console.log(`hieghest value is ${high}`);