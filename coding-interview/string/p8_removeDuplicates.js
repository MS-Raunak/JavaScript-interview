function removeDuplicate(str){
    /** //Approach-1 
    let arr = str.split('');
    let res="";

    for (let i = 0; i < arr.length; i++) {
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]==arr[j]){
                arr[j] = "";
            }
        }
        if(arr[i]!=""){
            res+=arr[i];
        }
        
    }
    console.log(res);
    */

    /** //Approach-2 
    let arr = str.split("");
    let set = new Set();

    for(let char of arr){
        set.add(char);
    }

    // Convert the Set back to a string and print it
    console.log([...set].join('')); */

    /** //Approach-3: Improvement version of second approach 
    let arr = str.split("");
    let set = new Set();

    for(let char of arr){
        if(!set.has(char)){
            set.add(char);
        }
    }

    // Convert the Set back to a string and print it
    console.log([...set].join('')); */

    /** Approach-4: using reduce 
    let result = str.split("").reduce((acc, char) => {
        if (!acc.includes(char)) {
            acc += char;
        }
        return acc;
    }, "");

    console.log(result);*/

    /**Approach:5: using filter function */
    let result = str.split("").filter((char, index, arr)=> arr.indexOf(char)==index).join("");
    console.log(result);
    
}

removeDuplicate("chhaya")//chay