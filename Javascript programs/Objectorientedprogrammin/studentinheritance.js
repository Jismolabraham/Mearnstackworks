class person{
    setperson(name,age)
    {
        this.name=name
        this.age=age
    }
    printperson(){
        console.log(this.name,this.age);
    }
}
class student extends person{
    setstudent(rol,course)
    {
        this.rol=rol;
        this.course=course;
    }
}

// single level inheritance