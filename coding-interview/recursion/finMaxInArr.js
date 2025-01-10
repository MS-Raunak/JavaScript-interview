//1st Approach: using slice method
function findMax(arr) {
    if(arr.length==1) return arr[0];
    
    return Math.max(arr[0], findMax(arr.slice(1))); //basically every time extracting first ele and starting with next element
}


//2nd Approach: without using slice method
function findMaxx(arr, index){
    if(index===arr.length-1) return arr[index];
    return Math.max(arr[index], findMax(arr, index+1))
}

let arr = [1,22,3,44];
console.log(findMax(arr));
console.log(findMaxx(arr, 0));
