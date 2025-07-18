const user = {
    username: "aksh",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        //This function is used to access the current context which is present in the scope
        
    }
    //console.log(this);
    

}
user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()
console.log(this);  //it will return empty string




/*********************ARROW FUNCTION***************** */
const chai = () =>{
    let username = "aksh"
    console.log(this);

}
chai()


/* //EXPLICT RETURN
const addTwo = (num1 , num2) => {
    return num1 + num2
}
    if function is declared in curly braces then use return word
*/



const addTwo = (num1 , num2) =>  (num1 + num2 )  //IMPLICT RETURN
 // If function is declared in paranthesis return word is not necessary
console.log(addTwo(3,4));


//Return of an object fuction in which curly braces are used inside parenthesis
const add1Two = (num1,num2) => ({username: "aksh"})