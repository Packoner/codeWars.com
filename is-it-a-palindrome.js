function isPalindrome(x) {

    x = x.toLowerCase();

    let count = x.length;
    let countTrue = 0;
    let arr = [];

    for (let i = 0; i < count; i++) {
        arr[i] = x[count - 1 - i];
    }

    for (let i = 0; i < count; i++) {
        if (arr[i] === x[i]) {
            countTrue++;
        }
    }

    return count === countTrue;
}

console.log(isPalindrome('Madam'));