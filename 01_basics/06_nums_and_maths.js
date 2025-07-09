/*const score = 400
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));          //value after decimal


const otherNumber = 123.8966
console.log(otherNumber.toPrecision(4));


const hundreds = 10000000
console.log(hundreds.toLocaleString('en-IN'));
*/

//************************MATHS**************************

console.log(Math);
console.log(Math.abs(-4));    //only neg value is converted in positive
console.log(Math.round(4.6));
console.log(Math.ceil(4.2));    //choose the top value
console.log(Math.floor(4.9));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

console.log(Math.random());      //value between 0 and 1
console.log((Math.random()*10)+1);
console.log(Math.floor(Math.random()*10)+1);


const min =10
const max = 20
console.log(Math.random() * (max - min + 1) )     //formula in which range is present
console.log(Math.floor(Math.random() * (max - min + 1) ) + min)