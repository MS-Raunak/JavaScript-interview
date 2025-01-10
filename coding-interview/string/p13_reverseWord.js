function reverseWord(str){
    //return str.split(' ').map(s=> s.split('').reverse().join('')).join(' ');

    //using simple approach
    let strArr = str.split(' ');

    let res="";

    for(let s of strArr){
        let revStr = reverseS(s);
        res = res + revStr + " ";
    }

    return res.trim();
    
}

function reverseS(s){
    let sArr = s.split('');
    return sArr.reverse().join('');
}

console.log(reverseWord("hello chhaya"));