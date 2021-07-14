class Bank
{
    status=0;
    accounts={
        1000:{account_number:1000,name:"ajay",balance:1000,username:1000,password:"userone"},
        1001:{account_number:1001,name:"vjay",balance:2000,username:1001,password:"usertwo"},
        1002:{account_number:1002,name:"ram",balance:3000,username:1002,password:"userthree"},
        1003:{account_number:1003,name:"ravi",balance:4000,username:1003,password:"userfour"}
    }
    // createAccount(accountno,name,balance)
    // {
    //     this.accountno=accountno;
    //     this.name=name;
    //     this.balance=balance

    // }
    getAccountDetails(){
        // let accounts={
        //     1000:{account_number:1000,name:"ajay",balance:1000,username:1000,password:"userone"},
        //     1001:{account_number:1001,name:"vjay",balance:2000,username:1001,password:"usertwo"},
        //     1002:{account_number:1002,name:"ram",balance:3000,username:1002,password:"userthree"},
        //     1003:{account_number:1003,name:"ravi",balance:4000,username:1003,password:"userfour"}
        // }
        return this.accounts
    }
    authenticate(username,pwd)
    {
        let account_detail=this.accounts
        if(username in account_detail)
        {
            if(pwd==account_detail[username]["password"])
            {
                this.status=1;
                return username;
            }
            else
            {
                return -1
            }

        }
        else
        {
            return 0
        }
    }
    fundtransfer(from_account,to_account,amount)
    {
        if(this.status==1)
        {
            if(to_account in this.accounts)
            {
                if(this.accounts[from_account]["balance"]>amount)
                {
                    this.accounts[from_account]["balance"]-=amount
                    this.accounts[to_account]["balance"]+=amount
                }
                else
                {
                    console.log("insufficient balance");
                }
            }
            else
            {
                console.log("to acount does not exist");
            }

        }
        else
        {
            console.log("invalid session");
        }
        
    }


    deposit(amt)
    {
        this.balance+=amt;
        console.log(`your account is credited with ${amt} current balance is ${this.balance}`);

    }
    withdrawal(amt)
    {
        if(this.balance<amt)
        {
            console.log(`transation failed insufficient balance`);
        }
        else
        {
            this.balance-=amt
            console.log(`your account is debited with ${amt} current balance is ${this.balance}`);
        }

    }
    balanceEnq(account_number)
    {
        // console.log(`your balance is ${this.balance}`);
        if(this.status==1)
        {
            return this.accounts[account_number]["balance"]
        }
        return "invalid session"

    }
    logout(user)
    {
        this.status=0
    }

}
var obj1=new Bank()
// obj1.createAccount(1000,"arun",50000)

// obj1.withdrawal(25000)
// obj1.balanceEnq()
// obj1.getAccountDetails()
// console.log(accounts);
// var user=obj1.authenticate(1001,"usertwo")
// console.log(obj1.balanceEnq(user));
// var res=user==0?"invalide":user==-1?"invalid passwords":"success"
// console.log(res);

// console.log(obj1.getAccountDetails());
// obj1.fundtransfer(user,1001,500)
console.log(obj1.balanceEnq(1001));
// obj1.logout(user)


