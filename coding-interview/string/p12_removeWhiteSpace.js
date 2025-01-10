function removeWhiteSpace(str){
    //Regular Approach
    let res="";
    for(let ch of str.split("")){
        if(ch!=" "){
            res+=ch;
        }
    }

    return res;

    //using filter function
    /*let strArr = str.split('');
    return strArr.filter((ch) => ch!=' ').join('');*/
}

console.log(removeWhiteSpace("hello chhaya"));//hellochhaya
