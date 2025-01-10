function isAnagram(str1, str2){
    if(str1.length!=str2.length){
        return false;
    }

    let sortedStr1 = str1.split('').sort().join('');
    let sortedStr2 = str2.split('').sort().join('');

    return sortedStr1==sortedStr2;
    
}

console.log(isAnagram("listen", "silent"));//true
console.log(isAnagram("aab", "abb"));//false
console.log(isAnagram("Apple", "Pineapple"));//false
