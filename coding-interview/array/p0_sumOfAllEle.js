/**
 * TOPIC COVERED
 * ==============
 * traditional FOR LOOP: Accessing data using index
 * Ex: arr[index]
 * 
 * FOR...OF LOOP: Process data without using index
 * EX: for(let ele of arr)
 * 
 * arr.reduce((callback)) :
 * -------------------------
 * It is a higher order function which accepts callback function and one intial value as paramter.
 * callback accepts one accumulator and one currentEle as parameter and accumulator accumulates the curr value for each iteration.
 * It is used to reduce or syncronized arr of elements into a single value.
 * It return single value rather than array.
 * 
 * EX: arr.reduce((sum, currEle) => sum+=currEle, initialVal)
 * Note: initialVal could be any value like 0,1,2,3,4....
 * 
 * 
 */

function sumOfEle(arr){
    let sum=0;

    //Traditional Approach: Using For Loop
    /*
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
    }
    */

    //Using For..Of Loop
    /*
    for(let ele of arr){
        sum+=ele;
    }
    */

    //Using arr.reduce() function
    sum = arr.reduce((acc, curr) => acc+curr, 0);

    return sum
}

console.log(sumOfEle([1,2,3]));//6
console.log(sumOfEle([1,2,3,4]));//10
