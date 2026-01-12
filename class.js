class person
{
    constructor(name,age,city)
    {
        this.name=name;
        this.age=age;
        this.city=city;
    }
    hello()
    {
        console.log(`my self: ${this.name},age :${this.age}, city name: ${this.city}`)
    }
}
let p1=new person("bhumika", 18,"deola");
let p2= new person("khushi",36,"software eng");
p1.hello();
p2.hello();
