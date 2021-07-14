class employee{
    setemployee(eid,ename,edesig,eexp,esal)
    {
        this.empid=eid;
        this.empname=ename;
        this.empdesig=edesig;
        this.empexp=edesig;
        this.empsal=esal
    }
    printemp()
    {
        console.log(this.empid,this.empname,this.empdesig,this.empexp,this.empsal);
    }
}
var emp=new employee()
emp.setemployee(1000,"Sam","Manager",2,25000)
emp.printemp();







class student{
    setstudent(id,sname,course,attendence,fee)
    {
        this.sid=id;
        this.sname=sname;
        this.course=course;
        this.sattend=attendence;
        this.fees=fee;
    }
    printstudent()
    {
        console.log(this.sid,this.sname,this.course,this.sattend,this.fees);
    }
}
var stu=new student();
stu.setstudent(1001,"Arun","BSC MATH",100,30000)
stu.printstudent();