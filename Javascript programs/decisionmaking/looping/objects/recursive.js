var patterns="ABABC"
var dict={}
for (let char of patterns)
{
    if(!(char in dict))
    {
        dict[char]=1;
    }
    else
    {
        console.log("first recursive character is"+char );
        break;
    }

    
}
