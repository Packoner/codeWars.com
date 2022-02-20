function validatePIN (pin) {
    /*let count = 0;
    for (let i = 0; i < pin.length; i++) {
        if(Number(pin[i]) >= 0) {
            count++;
        } else {
            return false;
        }
    }
    return count === 4 || count === 6;*/
    /*if (Number(pin) >= 0) {
        return pin.length === 4 || pin.length === 6;
    } else {
        return false;
    }*/
    /*if (pin.length === 6 || pin.length === 4) {
        let arr = pin.split('');
        /!*for (let i = 0; i < pin.length; i++) {
            if (!(arr[i] >= 0)) return false;
        }
        return true;*!/
        for (let i = 0; i < pin.length; i++) {
            if (typeof Number(arr[i]) === "number")
        }
    } else {
        return false;
    }*/
    /*if (pin.length === 6 || pin.length === 4) {
        let arr = pin.split('');
        for (let i = 0; i < arr.length; i++) {
            let bol = Number.isNaN(Number(arr[i]));
            //let str = 'arr[' + i + '] = ' + arr[i] + ' - ' + bol;
            //console.log(str);
            if (bol) return false;

        }
        return true;
    } else {
        return false;
    }*/
    if(pin.length === 4 || pin.length === 6) {
        let regEx = /\D/g;
        let arr = pin.match(regEx);
        return !arr;
    } else {
        return false;
    }
}

console.log(validatePIN("111111"));