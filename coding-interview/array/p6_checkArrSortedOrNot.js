function isSorted(arr){
    for (let i = 0; i < arr.length-1; i++) {
        if(arr[i]>arr[i+1]){
            return false;
        }
            
    }
    return true;
}

console.log(isSorted([1,5,2,4,8]));//false
console.log(isSorted([1,5,8,9,12]));//true
