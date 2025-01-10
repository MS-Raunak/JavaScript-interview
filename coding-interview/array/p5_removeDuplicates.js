/**
 * COVERED TOPICS:
 * ===============
 * Set: represent unique value in set
 * set.add(ele): to add element
 * map.has(ele): return boolean, check given element present or not in set
 */


function removeDuplicate(arr){
    /*Approach-1
    let uniqueArr=[];
    for(let ele of arr){
        if(!uniqueArr.includes(ele)){
            uniqueArr.push(ele);
        }
    }

    return uniqueArr;*/

    /**Approach-2: Using Set 
    let set = new Set();
    for(let ele of arr){
        if(!set.has(ele)){
            set.add(ele);
        }
    }

    return [...set];*/

    
   /**Approach-3: using filter function */
    let uniqueArr = arr.filter((ele, index, newArr) => newArr.indexOf(ele)==index);
    return uniqueArr;
}

console.log(removeDuplicate([1,2,3,4,2,1,3]));//[ 1, 2, 3, 4 ]
