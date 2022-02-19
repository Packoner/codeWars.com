function findNeedle(haystack) {
    let find = 'found the needle at position ';
    let count = 0;
    haystack.forEach(needle => {
        if (needle === 'needle') {
            find = find + count;
        }
        count++;
    })
    return find;
}
let arr = ['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]
console.log(findNeedle(arr))