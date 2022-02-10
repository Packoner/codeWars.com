const myArray = ['go','ood','goos']
function well (x) {
    let count = 0
    myArray.forEach(el => {
        if (el === 'good') {
            count++
        }
    })
    if(count === 1 || count === 2) {
        return 'Publish!'
    } else if (count > 2) {
        return 'I smell a series!'
    } else {
        return 'Fail!'
    }
}

let z = well(myArray)
console.log(z)