
//function to calculate greates element in array
function max(arr){
    let max=0;

    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }

    return max;
}


//function to calculate samllest element in array
function min(arr){
    let min=arr[0];
    
    for(let i=0; i<arr.length; i++){
        if(min > arr[i]){
            min = arr[i];
        }
    }

    return min;
}


let arr = [10, 60,42,9, 15];
console.log(`Max: ${max(arr)}`);
console.log(`Min: ${min(arr)}`);
