const person = {
    firstName : "Rohit",
    lastName : "Sharma",     //whenever key is having separte words then it is mandatory to inclosed with ""/ ''
    age: 37,
    fullName :function(){
        return this.firstName + ' ' + person.lastName
    } 
};

//ADD NEW METHOD
/**
 person.greeting = function () {
    console.log("Hello " + this.firstName);
}
console.log(person.greeting);//Hello Rohit
console.log(person.greeting());// undefined
*/

let fullName = person.fullName();
console.log(fullName);
 