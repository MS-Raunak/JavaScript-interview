//merge multiple objects

const obj1 = {
    1: "One",
    2: "Two",
    3: "Three"
}

const obj2 = {
    1: "Four",
    2: "Five",
    3: "Six"
}

////in this case obj2 will be merged in obj1 and return new object
// const resultObj = Object.assign(obj1, obj2); 
// console.log(resultObj); //{ '1': 'Four', '2': 'Five', '3': 'Six' }

////in this case obj1 and obj2 will be merged in empty obj and return new object
// const resultObj = Object.assign({}, obj1, obj2); 
// console.log(resultObj); //{ '1': 'Four', '2': 'Five', '3': 'Six' }

//Merge Using ES6 Feture(Using spread operator)

const resultObj = {...obj1, ...obj2};
console.log(resultObj);//{ '1': 'Four', '2': 'Five', '3': 'Six' }