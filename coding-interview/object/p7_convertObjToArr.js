function convert(obj){
    return Object.entries(obj);
}

console.log(convert({a:1, b:2}));//[ [ 'a', 1 ], [ 'b', 2 ] ]
