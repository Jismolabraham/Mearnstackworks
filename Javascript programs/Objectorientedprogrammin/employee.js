class employee{

    constructor(id,name,desig,sal,exp)
    {
        this.id=id
        this.name=name
        this.desig=desig
        this.sal=sal
        this.exp=exp
    }
    

}
var emp1=new employee(1000,"surya","trainee",30000,4)
var emp2=new employee(1001,"Abel","programmer",55000,3)
var emp3=new employee(1002,"Aiden","developer",60000,12)
var emp4=new employee(1003,"Sanju","marketing",40000,11)
var emp5=new employee(1004,"Jose","tester",50000,1)
var empdetails=[];
empdetails.push(emp1,emp2,emp3,emp4,emp5);
let maxsal=empdetails.reduce((num1,num2)=>num1.sal>num2.sal?num1:num2)
// console.log( maxsal);
let sorting=empdetails.sort((num1,num2)=>num1.exp-num2.exp)
// console.log(sorting);
let roll=empdetails.filter(obj1=>obj1.desig=="developer")
console.log(roll);




