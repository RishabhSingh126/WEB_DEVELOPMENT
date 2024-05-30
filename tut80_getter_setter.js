class User{
    constructor(name)
    {
        //Invokes the setter
        this.name=name;
    }
     get name()
     {
        return this._name;
     }
     set name(value)
     {
        if(value.length <4 )
            {
                console.log("The name is too short")
                return ;
            }
            this._name=value;
     }
}
let user =new User("Any")
//get function will run
console.log(user.name)     //Anything

user=new User(" ")   //Name is too short

//set function will run
user.name="Anything"
console.log(user)