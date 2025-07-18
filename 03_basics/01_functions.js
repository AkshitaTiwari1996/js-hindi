function addTwoNumbers(number1,number2){     //these are parameters

    let result = number1 + number2
    return result
   
    
}

const result = addTwoNumbers(3,5)           //these are arguments

console.log("Result:",result);



function loginUserMessage(username){
    if(!username){
        console.log("Please enter a username");
        return
        
    }
    return `${username} just logged in`
}
console.log(loginUserMessage());



function calculateCartPrice(val1,val2,...num1){                   //this dot combines the spread out data
    return num1
}
console.log(calculateCartPrice(200,300,500,6000));




const user = {
    username: "aksh",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and
         price is ${anyobject.price}`);
    

}
handleObject(user)
//or it can be done directly
/*handleObject({
    username: "sam",
    price:399
})
    */




const myNewArray = [200,400,100,600]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log((returnSecondValue)(myNewArray));
console.log((returnSecondValue)([200,400,500,1000]));
