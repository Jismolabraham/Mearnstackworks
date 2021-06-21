function addnumbers(...param)
{
    let sum=0;
    for (let num of param)
    {
        sum+=num;
    }
    return sum;
}
console.log(addnumbers(10,20));
console.log(addnumbers(10,20,30));
console.log(addnumbers(10,20,30,40));