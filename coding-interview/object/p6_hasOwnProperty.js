function hasProperty(obj, key) {
    return obj.hasOwnProperty(key);
}

console.log(hasProperty({a:1, b:2}, 'a'));//true
console.log(hasProperty({a:1, b:2}, 'v'));//false
