//let obj={
//    a:1,
//    b:"Hii"
//}
//console.log(obj)

//let animal={
//    eats:true
//};
//let rabbit={
//    jump:true
//};
//rabbit.__proto__=animal;         //sets rabbit[[prototype]]=animal

class Animal
{
    constructor(name)                  //Here the name will HII
    {
        this.name=name
        console.log("Object is created")
    }
    eats()
    {
        console.log("I am eating")
    }
    jump()
    {
        console.log("I am jumping")
    }
}

class Lion extends Animal
{
    constructor(name)                  //Here the name will HII
    {
        super(name);             //Super is used because extends Animal is used above
        console.log("Object is created")
    }
    eats()
    {
        super.eats();      //This is used to inherit property of Animal class(super class)
        console.log("Lion is eating")
    }
}
let a =new Animal("HII");            //The HII will go to the name which is in constructor
console.log(a);

let l=new Lion("LIONS");
console.log(l)
