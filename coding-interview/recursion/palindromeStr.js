function isPalindrome(s, i=0, j=s.length-1) {
    if (i>=j) return true;
        
    if(s[i]!==s[j]) return false;
    return isPalindrome(s, i+1, j-1);
}


console.log(isPalindrome("madam"));
console.log(isPalindrome("ram"));
