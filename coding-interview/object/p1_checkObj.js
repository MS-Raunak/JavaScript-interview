function isEmpty(obj){
    return Object.keys(obj).length==0;
}

console.log(isEmpty({}));//true
console.log(isEmpty({"banana": "yellow"})); //false
