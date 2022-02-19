function abbrevName(name){
    let abbName = name[0] + '.' + name[name.indexOf(' ') + 1];
    return abbName.toUpperCase()
}

console.log(abbrevName('Yevhen Dudka'));
console.log(abbrevName("yavhen dudka"));