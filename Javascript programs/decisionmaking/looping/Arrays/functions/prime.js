function prime(num1)
{
    let flag=0;
    for(i=2;i<num1;i++)
    {
        if (num1%i==0)
        flag++;
    }
    return flag==0?"prime":"not prime"
}
console.log(prime(15));