/**
 * TOPIC COVERED:
 * =============
 * 
 * arr.filter((callback))
 * ----------------------
 * it is a higher order function that accepts one callback.
 * used to filter elements from an array based on some condition.
 * it return new array(filtered array)
 * it does not affect the original array
 * 
 * EX: arr.filter((ele, index,newArr) => ...), where in callback index and newArr is optional
 * like, arr.filter((ele)=> ...)
 */

function filterArr(arr, ele){
    //Using traditional approach
    /*
    let newArr = [];
    for(let element of arr){
        if(element!=ele){
           newArr.push(element);
        }
    }
    return newArr;
    */

    //Using filter function
    return arr.filter((element) => element!=ele);
}

console.log(filterArr([1,2,3,4,5], 5));//[1,2,3,4]
console.log(filterArr([1,2,3,4,5], 1));//[2,3,4,5]
