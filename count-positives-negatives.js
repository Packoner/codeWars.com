function countPositivesSumNegatives(input) {
    if(input === null) return [];
    let posCount = 0;
    let negCount = 0;
    if (input.length === 0) {
        return [];
    } else {
        input.forEach(item => {
            if (item > 0) posCount++;
            if (item < 0) negCount += item;
        })
    }

    return [posCount, negCount]
}

console.log(countPositivesSumNegatives(null));
