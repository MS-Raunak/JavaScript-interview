/**
 * TOPIC COVERED:
 * ==============
 * str.repeat(2): string will repeat upon given times
 */

function repeatStr(str, num) {
    if(num<0) return '';

    return str.repeat(num);
}

console.log(repeatStr("chhaya", 2));//chhayachhaya
