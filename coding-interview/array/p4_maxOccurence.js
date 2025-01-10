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

function max(arr){
    /*let max=0;
    let maxOccuredEle=0;
    for(let i=0; i<arr.length; i++){
        let count=1;
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]==arr[j]){
                count++;
                arr[j]=0;
            }
        }
        if(arr[i]!=0 && max<count){
            maxOccuredEle=arr[i];
            max=count;
        }
    }

    console.log(`${maxOccuredEle}: ${max}`); //1: 3 times*/

    let map = new Map();
    for(let ele of arr){
        if(map.has(ele)){
            map.set(ele, map.get(ele)+1);
        }else{
            map.set(ele, 1);
        }
    }
     
    let max=0;
    let maxRepeated=0;
    for(let[key, val] of map){
        if(max<val){
            max=val;
            maxRepeated=key;
        }
    }
    console.log(`${maxRepeated}: ${max}`);// 1: 3
    
    
}
let arr = [1,2,4,5,1,3,1,8];
max(arr);
