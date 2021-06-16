//we can store more than one object
//no length limit
//define[]
//we can store same and different types of object
//we can update using index
//insertion order preserved
var exp=[25000,2900,45000,60000]
// console.log(exp);
// for (i=0;i<exp.length;i++)
// {
//     console.log(exp[i]);
// }
// exp[1]+=1000;
// console.log(exp[1]);
// for(amount of exp){
//     console.log(amount);
// }
for (let amount of exp){
    if (amount>25000)
    {
        console.log(amount);
    }
}