//string is an Object
const name = "aksh"
const repoCount = 50
console.log(`hello my name is ${name} 
and my repo count is ${repoCount}`);          //string interpulation


//other way to access a string
const gameName = new String('alaska-hd')



//Methods in string
console.log(gameName[0]);
console.log(gameName._proto_);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3)); //character at the following index
console.log(gameName.indexOf('a'));


const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-6,6)
console.log(anotherString);


const newStringOne = "   aksh    "
console.log(newStringOne);
console.log(newStringOne.trim());  //only for whitespace and /n



const url = "https://JAVA.com/java%20script"
console.log(url.replace('%20','-'))
console.log(url.includes('java'));


console.log(gameName.split('-'));