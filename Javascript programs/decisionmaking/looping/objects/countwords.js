var text="hai hello hai hello how are you"
var words=text.split(" ")
console.log(words);
var dict={};
for (let word of words)
{
    if(!(word in dict))
    {
        dict[word]=1
    }
    else{
        dict[word]+=1
    }
}
console.log(dict);