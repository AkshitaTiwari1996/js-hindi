//Immediately Invoked Function Expressions (IIFE)

(function chai(){
    //named IIFE
    console.log(`DB CONNECTED`);
    
})();



( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
    
})('aksh')


/*
()()
The first bracket shows the represention and the second bracket shows
the execution of code
*/

/*sometimes the global scope has pollution so iife is being used */