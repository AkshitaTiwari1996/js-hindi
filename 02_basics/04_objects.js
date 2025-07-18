//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


//console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "aksh",
            lastname: "tiwari"
        }
    }
}
console.log(regularUser.fullname.userfullname.firstname);   //nested list can be opened by using dot


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

//const obj3 = {obj1,obj2}      it will print the arrays as a part of a new one

/*const obj3 = Object.assign({},obj1,obj2)
The empty bracket will be considered as a target and other are as a source.
*/

const obj3 = {...obj1,...obj2}
console.log(obj3);


console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));


console.log(tinderUser.hasOwnProperty('isLoggedIn'));   //it returns value in boolean


/************************OBJECT DESTRUCTING*********************** */
const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "aksh"
}

//course.courseInstructor

const {courseInstructor: instructor} = course
//console.log(courseInstructor);
console.log(instructor);

/* API is in json format 
{
    "name": "aksh",
    "coursename": "js in hindi",
    "price": "free"

    here the keys and values are in string format

    [ {},
     {},
     ]            arrays
}
    */