function points(games) {
    let count = 0;
    games.forEach(str => {
        if (Number(str[0]) > Number(str[2])) {
            count += 3
        } else if (Number(str[0]) < Number(str[2])) {
            count += 0
        } else {
            count += 1
        }
    })
    return count;
}

let arr = ['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3']
console.log(points(arr))
