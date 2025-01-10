function secondMaxEle(arr){

    arr.sort((a,b) => a-b);

    let count=1;
    let secMax=0;

    for(let i=arr.length-1; i>=0; i--){
        if(count==2){
            secMax = arr[i];
            break;
        }
        count++;
    }
    return secMax;
    // let max=0;
    // let secMax=0;

    // for(let i=0; i<arr.length; i++){
    //     if(arr[i] > max){
    //         secMax = max;
    //         max=arr[i];
    //     }
    //     if(arr[i] < max && arr[i]>secMax){
    //         secMax = arr[i];
    //     }
    // }

    // return secMax;
}

console.log(secondMaxEle([4,1,5,9,6,9]));//6
