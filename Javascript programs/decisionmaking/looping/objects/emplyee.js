var emp={empid:101,emname:"Ram",empdesig:"manager",empsal:50000,empexp:10}
// var emp={empid:101,emname:"Ram",empdesig:"manager",empsal:50000,empexp:10}
          
console.log(emp);
console.log(emp.empsal);
emp.empsal=80000;
console.log(emp);
emp.empsal+=10000;
console.log(emp);
console.log("emppf" in emp);
if(!("emppf" in emp))
{
    emp.emppf=10000
}
console.log(emp);