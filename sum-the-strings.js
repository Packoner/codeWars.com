function sumStr(a,b) {
    if (a === '') a = 0;
    a = Number(a);
    if (b === '') b = 0;
    b = Number(b);
    let c = a + b;
    return String(c);
}

console.log(sumStr('32', ''));