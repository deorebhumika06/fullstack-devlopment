class rectangle
{
    constructor(length,breath)
    {
        this.length=length;
        this.breath=breath;
    }
    
    getArea()
    {
         return this.length*this.breath;
    }
    getParameter()
    {
        return 2*(this.length+this.breath);
    }

}
 let r1=new rectangle(5,10);
console.log(r1.getArea());
let r2=new rectangle(10,20);
console.log(r2.getParameter());
