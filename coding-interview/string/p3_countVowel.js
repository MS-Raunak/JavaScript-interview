/*
TOPICS COVERED
===============
* for(let s of str) or for(let e of arr) : find value of string and array one by one
* includes(char) : check whether the given character is present or not in specified string
*/

function countVowels(str){
    let count = 0;
    let vowels = "aeiou";

    for(let char of str){
        if(vowels.includes(char)){
            console.log(char);

            count++;
        }
    }

    return count;
}

console.log(countVowels("hello chhaya"));//e,o,a,a: 4
