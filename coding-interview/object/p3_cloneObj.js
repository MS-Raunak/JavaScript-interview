function clone(obj){
    return {...obj};
}

let originalObj = {a:1, b:2, c:3};
console.log(originalObj);//{ a: 1, b: 2, c: 3 }

let clonedObj = clone(originalObj);
console.log(clonedObj);//{ a: 1, b: 2, c: 3 }

console.log(originalObj==clonedObj);//false

//making changes on cloned object
clonedObj.a = 10;
console.log(clonedObj);//{ a: 10, b: 2, c: 3 }

//now let's see whether the original object is affected or not
console.log(originalObj);//{ a: 1, b: 2, c: 3 }


