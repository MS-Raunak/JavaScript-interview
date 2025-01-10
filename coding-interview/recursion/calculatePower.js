function calPower(n, powerVal) {
    if(powerVal==0) return 1;
    else if(powerVal==1) return n;
    return n*calPower(n, powerVal-1);
}

console.log(calPower(2,0));
console.log(calPower(2,1));
console.log(calPower(2,2));
console.log(calPower(2,3));

//we can optimized it by using exponatial approach...watch any tutorial for this approach
