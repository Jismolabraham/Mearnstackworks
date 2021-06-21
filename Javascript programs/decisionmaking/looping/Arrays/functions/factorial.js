function fact(num1)
{
    let res=1;
    for(i=1;i<=num1;i++)
    {
        res=res*i;
    }
    return res;
}
console.log(fact(5));