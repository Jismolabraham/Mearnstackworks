class parent{
    m1()
    {
        console.log("inside parent");
    }
}
class child extends parent{
    m2()
    {
        console.log("inside child");
    }
}
class subchild extends child{
    m3()
    {
        console.log("inside subchild");
    }
}
var sub=new subchild();
sub.m3();
sub.m2();
sub.m1();
var chil=new child();
// child.m3()//error
chil.m2();
chil.m1();

var par=new parent()
par.m1();
// parent.m2();//error
// parent.m3();//error