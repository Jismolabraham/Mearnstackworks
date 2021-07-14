function checkslot()
{
    let ag=document.querySelector("#age").value
    // let html_data=ag<18?"not eligible":"eligible"
    // document.querySelector("#result").innerHTML=`<p style=color:red>${html_data}</p>`
    if(ag<18)
    {
        result.innerHTML=`<h2 style=color:red>noteligible</h2>`
        
    }
    else
    {
        result.innerHTML=`<h2 style=color:green>${html_data}</h2>`
    }
} 