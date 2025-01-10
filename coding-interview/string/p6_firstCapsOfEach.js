//convert first letter as capital
function firstCap(str) {
    return str.split(" ").map(s => s[0].toUpperCase() + s.slice(1)).join(' ');//slice: extarct all values except first value
}

console.log(firstCap("hello chhaya"));// Hello Chhaya
