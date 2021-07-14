//local storage
// localStorage.setItem(key,value)
//adding new keyvalue pairs
// localStorage.setItem("account_no",1000)
// fetching accountnum
// localStorage.setItem("accountnumber",1000)
// localStorage.setItem("pwd","abc")
// var res=localStorage.getItem("accountnumber")
// // console.log(res);
// for(let i=0;i<localStorage.length;i++)
// {
//     let ke=localStorage.key(i)
//     let val=localStorage.getItem(ke)
//     console.log(ke,val);
// }
// localStorage.clear();

// var user={username:"user1",password:"abc1",name:"ram",balance:20000}
// localStorage.setItem(user.username,JSON.stringify(user))
// localStorage.clear()
var trans=[]
function createAccount()
{
    let AccountNum=accNo.value
    let UserName = uname.value
    let AccBal=accbal.value
    let Userpwd=pwd.value
    let UserEmail=mail.value
    let Account={
        AccountNum,UserName,AccBal,Userpwd,UserEmail
    }
    
    if(AccountNum in localStorage)
    {
        alert("This account already exists")
       
        location.reload(true);
    }
    else
    {
        localStorage.setItem(AccountNum,JSON.stringify(Account))
        alert("Account added succesfully")
       
        location.href="./banklogin.html"
         
    }

}

function login()
{
    let uid=accnum.value;
    let pwd=password.value;
    
    if(uid in localStorage)
    {
        let Account=JSON.parse(localStorage.getItem(uid))
        // console.log(Account);
        if(uid == Account.AccountNum & pwd==Account.Userpwd)
        {
            alert("login success")
            sessionStorage.setItem("user",uid)
            location.href="./home.html"
        }
        else
        {
            alert("incorrect password")
            location.reload(true)
        }
        
    }
    else
    {
        alert("This account does not exist")
        location.reload(true)
    }
}

function balanceEnq()
{
    let user=sessionStorage.getItem("user")
    let account=JSON.parse(localStorage.getItem(user))
    console.log(account);
    // alert(account.AccBal)
    bal.innerHTML=`<h1>Your account balance is ${account.AccBal}</h1>`

}

var req=sessionStorage.getItem("user")
if(req)
{
    litem.innerHTML=`logout${req}`;
}
function logout()
{
    sessionStorage.removeItem("user")
    location.href="./banklogin.html"
}
var index=0;
function fundtransfer()
{
    
    let to_accno=toacno.value;
    let confirm_acno=ctoacno.value;
    let amt=amount.value;
    let logged_user=JSON.parse(localStorage.getItem(req))
    if(logged_user.AccBal<amt)
    {
        alert("insufficient balance")
    }
    else
    {
        logged_user.AccBal=Number(logged_user.AccBal)-Number(amt)
        localStorage.setItem(logged_user.AccountNum,JSON.stringify(logged_user))
        if(to_accno in localStorage)
        {
            let user=JSON.parse(localStorage.getItem(to_accno))
            user.AccBal=Number(user.AccBal)+Number(amt)
            localStorage.setItem(user.AccountNum,JSON.stringify(user))
            alert("transaction completed")
            // trans={FromAccount:req,ToAccount:to_accno,Amount:amt}
            let data={FromAccount:req,ToAccount:to_accno,Amount:amt}
            trans.push(data)
            // savetransaction()
           
            // localStorage.setItem(req,JSON.stringify(trans))
            // populate(trans)
            // localStorage.setItem(index,trans)
            if(index in localStorage)
            {
                
            }
            else
            {
                localStorage.setItem(1,trans)
            }
            
        }
    }
}
function savetransaction()
{

}
function populate(trans)
{
    let html_data=""
    // console.log(trans);
    
        
        // console.log(data);
        html_data+=`<tr><th scope="row"></th><td>${trans.FromAccount}</td><td>${trans.ToAccount}</td> <td>${trans.Amount}</td> </tr>`
    
    // console.log(html_data);
    // transarea.innerHTML=html_data;
    document.querySelector("#transarea").innerHTML=html_data
    return trans;
    
}

function transaction()
{
    let accounts = [];
        for (let i = 0; i < localStorage.length; i++) {
            let ke = localStorage.key(i);
            let accounts = JSON.parse(localStorage.getItem(ke));
            // console.log(book);
            account.push(accounts)

        }
        // console.log(books);
        populate(account);
}