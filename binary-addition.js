function addBinary(a,b){
    let str = '';
    let bit = 0;
    let sum = a + b;
    while(sum >= 1){
        bit = sum % 2;
        str = bit + str;
        sum = Math.floor(sum / 2);
    }
    return str;
}

console.log(addBinary(250,4));