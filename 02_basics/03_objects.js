//SINGLETON

//Object literals
const mySym = Symbol("key1")

const JsUser = {
    name:"AKSH",
    "full name": "aksh tiwan",
    mySym: "myKey1",
    age:20,
    location: "delhi",
    email:"aksh@gmail.com",
    isLoggedIn:false,
    lastLoginDays: ["Monday","Saturday"]
}

console.log(JsUser.email);
console.log(JsUser["email"])       //other syntax

console.log(JsUser["full name"]);     //it cannot be done with first syntax
console.log(JsUser[mySym]);           
/*
In the case of a symbol the syntax is different as bracket are 
used instead of dot and symbol is also defined as keys
*/



JsUser.email = "akshita@gmail.com"       //new email is defined
//Object.freeze(JsUser)                   //after this freeze operation,values will not change
JsUser.email = "akshita@microsoft.com"   
console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello Js user");
    
}

JsUser.greetingTwo = function(){
    console.log(`Hello Js user,${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

