function remove (string) {
    //coding and coding...
    if (string[string.length - 1] === "!") {
        string = string.slice(0, string.length - 1)
    }
    return string;
}

let x = "Hello!!"
console.log(remove(x))