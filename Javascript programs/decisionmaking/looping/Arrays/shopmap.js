var products=[
    {code:1000,name:"garlic",mrp:120,aval_qty:10},
    {code:1001,name:"chilly",mrp:80,aval_qty:5},
    {code:1002,name:"tomatto",mrp:35,aval_qty:20},
    {code:1003,name:"onion",mrp:40,aval_qty:37},
    {code:1004,name:"potatto",mrp:45,aval_qty:40},
    {code:1005,name:"banana",mrp:55,aval_qty:60},
    {code:1006,name:"brinjal",mrp:43,aval_qty:2},
    {code:1007,name:"beetroot",mrp:38,aval_qty:5},
    {code:1008,name:"carrot",mrp:60,aval_qty:0},
    {code:1009,name:"bittergod",mrp:25,aval_qty:5},
]
// print all products names
// var prod_names=products.map(item=>item.name);
// console.log(prod_names);
// // var prod_upper=products.map(item=>item.name.toUpperCase())
// // console.log(prod_upper);
// var prod_upper=prod_names.map(name=>name.toUpperCase())
// console.log(prod_upper);
// var arr=[1,2,3,4,5,6,7,8,9,10]
// var evens=arr.filter(num=>num%2==0);
// console.log(evens);
// var pro_price=products.filter(item=>item.mrp<50)
// console.log(pro_price);
// var pro_priceqty=products.filter(item=>item.mrp<50& item.aval_qty>20)
// console.log(pro_priceqty);
// var price_range=products.filter(item=>item.mrp>30 & item.mrp<50)
// console.log(price_range);
// var prod_avail=products.filter(item=>item.aval_qty>0)
// console.log(prod_avail);
// var costly_prod=products.reduce((item1,item2)=>item1.mrp>item2.mrp?item1:item2);
// console.log(costly_prod);
// var cheap_prod=products.reduce((item1,item2)=>item1.mrp>item2.mrp?item2:item1)
// console.log(cheap_prod);
// // sort according to availability
products.sort((item1,item2)=>item2.aval_qty-item1.aval_qty).forEach(item=>console.log(item));
// console.log(sort_qty);
// var search=products.find(item1=>item1.name=="potatto");
// console.log(search);

//ise there any prod below 30

// var is_avail_price=products.some(item1=>item1.mrp<=30)
// console.log(is_avail_price);