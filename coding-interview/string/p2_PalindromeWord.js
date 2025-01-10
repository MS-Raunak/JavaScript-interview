function palindromeWord(str){
    let strArr = str.split(' ');

    for(let s of strArr){
        if(s===s.split('').reverse().join('')){
            console.log(`${s} is a Palindrome Word!`);
        }
    }
}

palindromeWord("madam from malayalam is looking cute")

