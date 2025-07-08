/*Primitive
There are 7 types:string,Number,Boolean,Null,Undefined,
Symbol,BigInt
*/



// JAVASCRIPT IS A DYNAMIC LANGUAGE



/*
Reference(Non Primitive)
There are array,Object,Functions
*/



const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id === anotherId);



const bigNumber = 345672899775884n  //bigInt
console.log(typeof bigNumber);




const heros = ["shaktiman" ,"naagraj","doga"];
let myObj = {
    name: "aksh",
    age:20,
}



const myFunction = function () {
    console.log("Hello World");
    
}

console.log(typeof myFunction); //return type will be objectfunction
