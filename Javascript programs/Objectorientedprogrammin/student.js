class student{
    constructor(roll,name,course,total)
    {
        this.roll=roll;
        this.name=name;
        this.course=course;
        this.total=total;
        // this.fees=fee;
    }
    printstudent()
    {
        console.log(this.roll,this.name,this.course,this.total);
    }
}
var stu=new student(1001,"Arun","BSC MATH",100);
// stu.setstudent()
stu.printstudent();
var stu2=new student(1002,"Arun11","BSC ---MATH",300)
stu2.printstudent();
console.log(stu2.name);
//'this' used to point current instance variables.
//duty of setstudent() method is used to initialize instance variable
//duty of 'constuctor'  initialize instance variable
//constructor name always same as class name. in java and c++
//in java script =----constuctor name always constructor()
//python _init_
//constructor automatically invoked when the object is created
