// if

const isUserloggedIn = true
const temperature = 41
if(temperature < 50){
    console.log("less than 50");  
}else{
    console.log("temp is greater than 50");
    
}
console.log("temperature is greater than 50");




//var has a global scope that's why we do not use it as it has uncertainity
const score = 200
if(score>100){
    let power = "fly"
    console.log(`User power: ${power}`);
}
//console.log(`User power: ${power}`);       it will provide error as it is beyond scope




const userloggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if (userloggedIn && debitCard && 2==2){
    console.log("Allow to buy course");    
}
if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");    
}