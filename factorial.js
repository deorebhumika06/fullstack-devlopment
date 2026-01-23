let num=parseInt(prompt("enter the no"));
for(let i=1;i<=num;i++)
{
    if(i%2==0)
    {
        console.log(i);
         let product=1;
        for(let j=1;j<i;j++)
        {
            product*=j;
        }
        console.log("factorial",product);
    }
    else
    {
        console.log("even no skip",i);
    }
}
