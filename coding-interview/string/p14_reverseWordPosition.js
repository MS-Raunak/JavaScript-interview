function revWordPosition(str){
    //return str.split(' ').reverse().join(' ');

    //simple approach
    let strArr = str.split(' ');
    let i=0;
    let j=strArr.length-1;

    while(i<j){
        let temp = strArr[i];
        strArr[i] = strArr[j];
        strArr[j] = temp;
        i++;
        j--;
    }

    return strArr.join(' ');
}

console.log(revWordPosition("hello chhaya"));
