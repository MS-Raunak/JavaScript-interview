/**
 * In JS, object is the key and value pair which can store any value in the form of key and value pair
 * There are various way to create the object
 * 1.Constructor method => let obj = new Object()
 * 2.Object literal etc => let obj = {key: val}
 */

//CREATING OBJECT USING CONSTRUCTOR METHOD
/** 
let personObj = new Object();
personObj.name = "Ram",
personObj.age = 29,
personObj.gender = "Male"
*/


//CREATING OBJECT USING CONSTRUCTOR LITERAL
const personObj = {
    'full name': "Ram",  //if key is seperated with space then string literal is mandatory
    age: 29,
    gender: "Male"
};

// ACCESSING OBJECT USING KEY  BY DOT(.) NOTATION
//console.log(personObj['full name']);

//ACCESSING OBJECT USING KEY BY [] NOTATION
/**console.log(personObj['age']);*/

//REPLACE VALUE OF AGE PROPERTY
/**
personObj.age = 30;
personObj['age'] = 30;
console.log(personObj.age);//30
*/

//ADD NEW PROPERTY IN PERSON OBJECT
personObj.id = 100;
//personObj['id'] = 100;
//console.log(personObj.id);//100


//DELETE ID PROPERTY OF PERSON OBJECT
delete personObj.id;
//delete personObj['id']
//console.log(personObj.id); //undefined

//FREZE OBJECT TO PREVENT TO PERFORM ANY OPERATION ON PERSON OBJECT
Object.freeze(personObj);
personObj.mob = "1234567890";
//console.log(personObj.mob); //undefined


/**###############  OBJECT.METHODS() ########################### */

//keys(): TO RETURN ALL KEYS OF OBJECT
let keys = Object.keys(personObj);
//console.log(keys);//[ 'full name', 'age', 'gender' ]

//values(): TO RETURN ALL VALUES OF OBJECT
let values = Object.values(personObj);
//console.log(values);//[ 'Ram', 29, 'Male' ]

//hasOwnProperty(): CHECK SPECIFIED PROPERTY IS PRESENT IN GIVEN OBJECT OR NOT AND RETURN BOOLEAN
let isPresent = personObj.hasOwnProperty('age');
//console.log(isPresent);//true








