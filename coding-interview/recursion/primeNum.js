function isPrime(num, i=2){
    if(i>num/2) return true;

    if(num%i===0) return false;
    return isPrime(num, i+1);
}

console.log(isPrime(6));
console.log(isPrime(5));
console.log(isPrime(55));
console.log(isPrime(11));
console.log(isPrime(23));

