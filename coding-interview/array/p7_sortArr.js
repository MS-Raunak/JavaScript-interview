/**
 * TOPIC COVERED
 * ==============
 * arr.sort((a,b)) => sorting arr
 *  */

function sortArr(arr){
    return arr.sort((a,b)=> a-b);//in ascending
    //return arr.sort((a,b)=> b-a);//in ascending
}

console.log(sortArr([1,5,2,4,8]));
