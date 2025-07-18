//     {}=> these brackets represent the scope
//     {}=> in objects these braces represent the object declaration


let a = 300
if (true){
    let a =10
    const b = 20
    console.log("INNER:",a);  
}
console.log(a);


/*******************NESTED SCOPE ****************/
function one(){
    const username = "aksh"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
    //console.log(website);
    two()
}
one()




if(true){
    const username = "aksh"
    if (username === "aksh"){
        const website = "youtube"
        console.log(username+website);
        
    }
    //console.log(website);       it cannot be run as it is beyond the scope
    
}
//console.log(username);          it cannot be run as it is beyond the scope


//+++++++++++++++++++++++Interesting+++++++++++++++++
console.log(addone(5))
function addone(num){
    return num + 1

}


addTwo(5)
const addTwo = function(num){            //it is considered as a variable
    return num + 2

} //it would give error as we are providing the value first instead of declaring


