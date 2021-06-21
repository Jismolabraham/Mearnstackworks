var products=[
    [100,"ricepowder",30,10],
    [101,"oreo",35,100],
    [102,"darkfantacy",40,50],
    [103,"fifty",20,5],
    [104,"horlicks",250,5],
    [105,"complan",190,0],
    [106,"boost",250,10],
    [106,"bo",5,10]
]
//print number of product in the shop
// print product in stock
// print costly product
//print low cost product
//is there any item available below 10
// print details of boost
var cnt=0;
var stock=0;
// console.log(products);
for(let prod of products)
{
    cnt++
    

    // console.log(prod);
}
console.log(`number of products ${cnt}`);
console.log(`products available`);
for (let prod of products)
{
    if(prod[3]>0)
    {
        console.log(prod[1]);
    }
}
for(let prod of products)
{
    if(prod[1]=="boost")
    {
        console.log(prod);
    }
}
console.log(`products below 5 is`);
for(let prod of products)
{
    if (prod[2]<10)
    {
        console.log(prod);
    }
}
var cost=0;
for (let prod of products)
{
    if(prod[2]>cost)
    {
        cost=prod[2];
    }
}
console.log(`costly products are`);
for (let prod of products)
{
    if (prod[2]==cost)
    {
        console.log(prod);
    }
}

var cost1=0;
for (let prod of products)
{
    if(prod[2]<cost1)
    {
        cost1=prod[2];
    }
}
console.log(`low cost products are`);
for (let prod of products)
{
    if (prod[2]==cost1)
    {
        console.log(prod);
    }
}


// print number of product in this shop  7

// print number of product in stock 6

// print costly product


// print losw_cost product

// is there any item available under rs 10 ? true

// print deatils of boost
