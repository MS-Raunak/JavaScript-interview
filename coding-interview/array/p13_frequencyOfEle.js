function frequency(arr){
    // for(let i=0; i<arr.length; i++){
    //     let count=1;
    //     for(let j=i+1; j<arr.length; j++){
    //         if(arr[i]==arr[j]){
    //             count++;
    //             arr[j] = '';
    //         }
    //     }
    //     if(arr[i]!=''){
    //         console.log(`${arr[i]} : ${count}`);
    //     }
    // }


    //USING MAP
    let map = new Map();
    for(let n of arr){
        if(map.has(n)){
            map.set(n, map.get(n)+1);
        }else{
            map.set(n, 1);
        }
    }

    map.keys().forEach(key => console.log(`${key} : ${map.get(key)}`));
        

    
}

frequency([2,13,2,4,2,13])