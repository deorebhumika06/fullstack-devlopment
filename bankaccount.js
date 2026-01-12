class bankaccount
{
    constructor(name,balance,accountno)
    {
        this.name=name;
        this.balance=balance;
        this.accountno=accountno;
    }
   withdraw(amount)
   {
       if(amount>=this.balance)
       {
           console.log("enter the valid no")
       } else
       {
           this.balance-=amount;
           console.log(`enter the no ${this.balance}`)
       }
       
   }
   deposit(amount)
   {
       if(amount<=0)
       {
           console.log("enter the amount")
       }
       else
       {
           this.balace+=amount;
           console.log(`enter the amount ${this.balance}`)
       }
   }
}

let acc1=new bankaccount("bhumika",10000,201234);
acc1.withdraw(500);
acc1.deposit(2000);
