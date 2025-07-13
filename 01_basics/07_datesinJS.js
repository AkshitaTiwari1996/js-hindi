//DATES

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());

console.log(typeof myDate);    //date is a typeof Object


//let myCreatedDate = new Date(2025,0,21)
//let myCreatedDate = new Date(2025,0,21,5,3)      //other way for putting the dates
//let myCreatedDate = new Date("2025-01-6")        //another method
//let myCreatedDate = new Date("6-01-2025")    
console.log(myCreatedDate.toLocaleString());




let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Date.now()/1000);
console.log(Math.floor(Date.now()/1000));




let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() +1);
console.log(newDate.getDate());




