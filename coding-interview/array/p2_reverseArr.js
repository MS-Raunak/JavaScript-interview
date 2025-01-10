function reverse(arr){
   /**
    * Approach-1: using array.reverse() 
      return arr.reverse();
   */
   let i=0;
   let j=arr.length-1;

   while(i<j){
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
   }

   return arr;
}

let arr = [1,2,3,4,5];
console.log(reverse(arr));//[ 5, 4, 3, 2, 1 ]

