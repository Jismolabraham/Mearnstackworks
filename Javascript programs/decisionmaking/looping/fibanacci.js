var i=0, nextnum, n1=0,n2=1, max = 50;
console.log("Fibanacci series:---" );
console.log(n1);
console.log(n2);
nextnum=n1+n2;
// console.log(nextnum);
while (i<=max){
    console.log(nextnum);
    n1=n2;
    n2=nextnum;
    nextnum=n1+n2;
    i++
}