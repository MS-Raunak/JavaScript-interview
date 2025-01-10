function print1ToN(m=1, n) {
    if(m>n) return;

    console.log(m);
    print1ToN(m+1, n);
}

print1ToN(1, 10);