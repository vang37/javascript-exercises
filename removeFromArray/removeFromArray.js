const removeFromArray = function () {
    let arr = Array.from(arguments[0])
    for (let i = 0; i < arr.length; i++) {
        var val = arr[i];
        for (let j = 1; j < arguments.length; j++) {
            if (val == arguments[j]) {
                arr.splice(i, 1);
                i--;
            }
        }
    }
    return arr
}

module.exports = removeFromArray
