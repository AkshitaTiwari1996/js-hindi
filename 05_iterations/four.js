const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"
}

for (const key in myObject) {
    //console.log(`${key} shortcut is for ${myObject[key]}`);    
}

const programming = ["js","rb","py","java","cpp"]
for (const key in programming){
    console.log(key);
    console.log(programming[key]);
    
}



//here map is not iterable
/*
const map = new Map()
map.set('IN',"India")
map.set('USA',"United States OF America")
map.set('Fr',"France")
map.set('IN',"India")
for (const key in map) {
    console.log(key);
    
}
    */