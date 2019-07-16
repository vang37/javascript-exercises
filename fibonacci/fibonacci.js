const fibonacci = function (num) {
    let a = 1;
    let b = 1;
    array = []
    if (num < 0){return "OOPS"}
    else
    for (i = 2; i < num; i++) {
        let c = a + b;
        a = b;
        b = c;
        array.push(c);
    }
    return array[array.length - 1]
}

module.exports = fibonacci
