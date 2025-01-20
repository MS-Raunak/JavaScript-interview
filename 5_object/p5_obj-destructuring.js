//Object Destructuring: Process of extracting data from obj and assgning into the variable
const player = {
    firstName : "Rohit",
    lastName : "Sharma",   
    age: 37,
};

const {firstName, lastName, ...extraKeys} = player;

console.log(firstName); //Rohit
console.log(lastName); //Sharma
console.log(extraKeys); //{ age: 37 }

//Note: while destrucring key name must be same


//Now give our own key name
const{firstName: fName} = player;
console.log(fName); //Rohit
