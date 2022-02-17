function remove (string) {
    let count = string.length;
    let newStr = '';
    for (let i = 0; i < count; i++) {
        if (string[i] !== '!') {
            newStr += string[i];
        }
        if (i === count - 1) newStr += '!';
    }
    return newStr;
}

console.log(remove("!!Hi !!! Hi!!!!"))