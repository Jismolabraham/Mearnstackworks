//method overloading
//same methodname and different number of arguments
class calculation{
    add()
    {
        console.log("inside no arg");
    }
    add(num1)
    {
        console.log("inside one arg");
    }
    add(...args)
    {
        console.log("inside two arg");
    }
}
var calc=new calculation();
calc.add();
calc.add(10);
calc.add(10,20);