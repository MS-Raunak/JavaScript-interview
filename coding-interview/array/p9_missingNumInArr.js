function missingNum(arr){
    let n = arr.length;
    n=n+1; //since 1 element is missing
    let totalSum = n*(n+1)/2

    /*let sumOfEleInArr=0;

    for(let ele of arr){
        sumOfEleInArr+=ele;
    }*/

    let sumOfEleInArr = arr.reduce((acc, curr) => acc+curr, 0)//shortcut approach

    return totalSum-sumOfEleInArr;
}

console.log(missingNum([1,2,4,5]));//3
console.log(missingNum([1,2,3,5]));//4
console.log(missingNum([1,4,3,5]));//2
