const reverseSeq = n => {
    let count = n;
    let arr = [];
    for (let i = 0; i < count; i++) {
        arr.push(n--);
    }
    return arr;
}

console.log(reverseSeq(5))