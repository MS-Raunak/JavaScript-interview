/**
 TOPICS COVERED
===============
 * split(" "): take some sexpression to split string into array
 * for example:
 * let str = "hello chhaya"
 * let arr = str.split(' ')
 * 
 * arr = [hello, chhaya]
 * 
 * length: use to find length of array and string, it is not a function.
 * for(let s of str) or for(let e of arr) : find value of string and array one by one
 * 
 */

function longestWord(str) {
    let max=0;
    let longest="";

    let arr = str.split(" ");
    
    for(let s of arr){
        if(s.length>max){
            max = s.length;
            longest = s;
        }
        
    }

    console.log(`longest word is ${longest} with length of ${max}` );
    //console.log(arr.reverse());
    

}

longestWord("afternoon morning");//afternoon : 9
longestWord("night morning");//morning: 7