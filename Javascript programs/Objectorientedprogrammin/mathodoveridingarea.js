class rectangle{
    area(...args)
    {
        console.log("area of retangle", args[0]*args[1]);
    }
}
class shape extends rectangle{
    area(...args)
    {
        super.area(args[0],args[1]);
        console.log("shape area",args[2]*args[2]);
    }
}
var shap=new shape();
shap.area(10,20,30)