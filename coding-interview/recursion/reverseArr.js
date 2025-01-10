//bruteforce solution
// function reverseArr(arr, j=arr.length-1){
//     if(j<0) return;
//     console.log(array[j]);
    
//     reverseArr(arr, j-1);
// }
// let array = [1,2,3,4,5];
// console.log("original arr: ", array);
// reverseArr(array);




//optimized solution
function reverse(arr, i=0, j=arr.length-1){
    if(i>j) return;

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;

    reverse(arr, i+1, j-1);
}

let arr = [1,2,3,4,5];
console.log("original arr: ", arr);

reverse(arr);
console.log("reversed arr: ", arr);

