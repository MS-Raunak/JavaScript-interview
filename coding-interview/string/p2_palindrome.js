/**
 TOPICS COVERED
===============
 * split(" "): 
-----------------
take some sexpression to split string into array
 * for example:
 * let str = "hello chhaya"
 * let arr = str.split(' ')
 * 
 * arr = [hello, chhaya]
 * 
 * reverse():
 * -----------
 *  reverse order of element in arr, in string it is used with split() function
 * join(): join the elements of an array or splited characters of string
 * example with arr:
 * let arr = ['apple', 'banana']
 * let reversed = arr.reverse();
 * reversed = ['banana', 'apple']
 * 
 * example with string:
 * let reversed = "abc".split('').reverse().join('');
 * reversed = "cba"
 * 
 */

function isPalindrome(str) {
   
   //let reverse = str.split('').reverse().join(''); //using inbuilt function

   //using regular approach
   let strArr = str.split('');
    let i=0; 
    let j=str.length-1;
    
    while(i<j){
        let ch = strArr[i];
        strArr[i] = strArr[j];
        strArr[j]=ch;
        i++;
        j--;
    }

   //return str==reverse;
   return str==strArr.join('');
   
}


console.log(isPalindrome("madam")); //true
console.log(isPalindrome("madamn")); //false


