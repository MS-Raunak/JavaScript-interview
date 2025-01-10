function countProperties(obj) {
    return Object.keys(obj).length;
}

console.log(countProperties({1:"Banana", 2: "Apple", 3: "Grapes"}));//3
