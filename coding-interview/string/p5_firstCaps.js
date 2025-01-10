/**
 TOPICS COVERED
===============
 * split(" "): take some sexpression to split string into array

 * for example:
 * let str = "hello chhaya"
 * let arr = str.split(' ')
 * arr = [hello, chhaya]
 * 
 * str.toUpperCase(): captilizie letter of  string
 * 
 * "hello".slice(1) : extract values which started from given index(here index=1) to last
 * op: ello 
 * 
 * 
 * 
 */

function firstLetterCap(str){
    /* //First Approach
    let arr = str.split('');
    arr[0] = arr[0].toUpperCase();
    console.log(arr.join(''));
    */

    /** //Second Approach */
    let res = str[0].toUpperCase() + str.slice(1);
    console.log(res);
    
}

firstLetterCap('hello') //Hello