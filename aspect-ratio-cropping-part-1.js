function aspectRatio(x, y) {
    let ratio = 16 / 9;
    let newX = Math.ceil(y * ratio);
    return [newX, y];
}

console.log(aspectRatio(640, 480));