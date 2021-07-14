class products
{
    constructor(prodid,prodname,prodprice,prodstock)
    {
        this.prodid=prodid;
        this.prodname=prodname;
        this.prodprice=prodprice;
        this.prodstock=prodstock;
    }
    printprod()
    {
        console.log(this.prodid,this.prodname,this.prodprice,this.prodstock);
    }
}