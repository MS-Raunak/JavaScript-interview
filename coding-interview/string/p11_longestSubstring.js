function longestSubstring(str){
    let substr="";
    let longestSubstr="";

    let max=0;
    for(let i=0; i<str.length; i++){
        for(let j=i; j<str.length; j++){
            substr = str.substring(i, j);
        }
        if(substr.length > max){
            max=substr.length;
            longestSubstr=substr;
        }
    }

    console.log(`Longest substring is ${longestSubstr} with length ${max}`);
    
}

longestSubstring("papaya");