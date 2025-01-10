function isPanagram(str){
    if(str.length < 26) return false;

    let arr = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

    for(let ch of arr){        
        if(!str.includes(ch)){
           return false;
        }
    }

   return true;
}

console.log(isPanagram("hello chhaya"));//false
console.log(isPanagram("abcdefghijklmnopqrstuvwxyz"));//true
console.log(isPanagram("abcdefghijklmnopqrstuvxyaa"));//false
