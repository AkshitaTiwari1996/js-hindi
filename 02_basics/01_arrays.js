//array

const myArr = [0,1,2,3,4,5,6]
const myHeros = ["jakichan","captain america"]

//deep copy= it is a copy whose properties do not share the same reference
//the original Object is duplicated
//shallow copy = the original object is not duplicated but has the same reference


const myArr2 = new Array(1,2,3)
console.log(myArr[0]);

//Array methods

myArr.push(6)
myArr.pop()       //remove the last value in the list
myArr.unshift(9)  //puts the value at the start
myArr.shift()     //removes the first start value



console.log(myArr.includes(9));/*it finds if the value is there or not 
and even returns the value in boolean datatype */
console.log(myArr.indexOf(2)); //if value is not present it will return -1


const newArr = myArr.join()

console.log(myArr);
console.log(myArr);


//SLICE AND SPLICE

console.log("A",myArr);

const myn1 = myArr.slice(1,3)
console.log(myn1);
console.log("B",myArr);
//In slice last range is not included

const myn2 = myArr.splice(1,3)
console.log(myn1);
console.log("C",myArr);
//it manipulate the original array
//In splice last range is not included

