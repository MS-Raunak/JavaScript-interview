//print arr using recursion
function printArr(arr,idx){
    if(idx == arr.length) return;

   console.log(arr[idx]);
   printArr(arr, idx+1);
}

printArr([1,2,3,4,5], 0);


/**
 * Complexity:
 * function called: n times
 * so the time complexity: 1*O(n) => O(n)
 * 
 * //functional internally uses stack for the temporarily memory
 * so the auxillary(temporarily) space complexity : O(n)
 */