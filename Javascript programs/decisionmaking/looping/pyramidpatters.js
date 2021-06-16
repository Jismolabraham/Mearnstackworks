// // var str="";
// var row = 9;
// var space = ""

// for (let i = 1; i <= 5; i++) {
//     let str = ""

//     for (let j = 1; j <= i; j++) {
//         str += '* '
//     }
//     for(j=2*(row-i); j>=0; j--)
//             {
//                 let space=""
//                 // printing spaces
//                 space+=" ";
//                 console.log(space+str);
//             }
    
//     space="";
    
// }
for (let row=1;row<=5;row++){
    let str=""
    for(let space=5-row;space>=1;space--)
    {
        str+=" "
    }
        for (let star=1;star<=row;star++)
        {
            str+="* "
        }
    
    console.log(str);
}