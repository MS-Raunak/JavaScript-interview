function mergeTwoStr(str1, str2){

    //APPROACH-1
   // return str1 + " " + str2;

   //APPROACH-2
    let str3 = [...str1," ",...str2];
    return str3.join('');
}

console.log(mergeTwoStr("chhaya", "gupta"));
