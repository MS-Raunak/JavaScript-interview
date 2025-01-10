/**
 * COVERED TOPICS:
 * ===============
 * Map: represent key and value pair
 * map.set(key, val): to add element
 * map.has(key): return boolean, check given key present or not in map
 * map.entries(): return key-val paired obj
 * 
 * Note: key must be unique, and it preserved insertion order
 */


function frquency(arr) {
    let map = new Map();
    for(let ele of arr){
        if(map.has(ele)){
            map.set(ele, map.get(ele)+1);
        }else{
            map.set(ele, 1);
        }
    }
    
    for(let [key, value] of map){
        console.log(`${key}: ${value}`);
    }
    
    console.log("=====");
    
}

//without using inbuilt function
function frquency1(arr){
    for(let i=0; i<arr.length; i++){
        let count=1;
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]==arr[j]){
                count++;
                arr[j] = '';
            }
        }
        if(arr[i]!=''){
            console.log(`${arr[i]}: ${count}`);           
        }
    }
}

let arr = [1,2,3,1,3,1];
frquency(arr);
frquency1(arr);

