//FOR OF OPERATOR

// ["","",""]
//[{},{},{}]

const arr = [1,2,3,4,5]


for (const num of arr) {
    //console.log(num);
    
}

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`);
    
}



//Map
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States OF America")
map.set('Fr',"France")
map.set('IN',"India")
//console.log(map);


for (const [key,value] of map) {
    //console.log(key, ':-' , value);
    
}

//the objects are not iterable by this method
const myObject = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

for (const [key,value] of myObject) {
    //console.log(key, ':-' , value);
}
