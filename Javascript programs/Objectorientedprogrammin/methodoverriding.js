//method overroding- same methods in two classes with same resolution(same num of arguments)
//there should exist the inheritance between the classes.
class parent{
    phone()
    {
        console.log("samsung");
    }

}
class child extends parent{
    phone()
    {
        super.phone();
        console.log("iphone");
    }
}
var chil=new child();
chil.phone();