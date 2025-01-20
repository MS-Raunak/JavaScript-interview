// console.log(this);//window global object

// function test() {
//     console.log(this);//window global obj
    
// }
// test();


// let test = function(){
//     console.log(this);//window global obj
    
// }
// test();

// let test = () => {
//     console.log(this);//window global obj
    
// }
// test();



// let person = {
//     name: "ABC",
//     dob: 2000,
//     gender: "male",
//     calculateAge: function(){
//         return 2024 - this.dob;
//     }
// }

// console.log(person.calculateAge()); //24


//Inside normal method this keyword always holds global object when we use strict mode then it holds undefined
// let person = {
//     name: "ABC",
//     dob: 2000,
//     gender: "male",
//     calculateAge: function(){
//         console.log(this);
//         function inner(){
//             console.log(this); //global object: window
//         }
//         inner();
//         return 2024 - this.dob;
//     }
// }

// console.log(person.calculateAge()); //24


//Inside arrow function this keyword holds the value of their parent object
let person = {
    name: "ABC",
    dob: 2000,
    gender: "male",
    calculateAge: function(){
        console.log(this);
         inner = () => {
            console.log(this); //person obj
        }
        inner();
        return 2024 - this.dob;
    }
}
console.log(person.calculateAge()); //24



