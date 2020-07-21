const palindromes = function (str) {
    let string = "", reverseString = "", array = [];
    for (let s of str) {
        if (isAlpha(s)) {
            array.push(s)
        }
    }
    for (let a of array) {
        string += a.toLowerCase();
        reverseString = a + reverseString.toLowerCase();
    }
    if (string === reverseString) return true
    else return false
}

function isAlpha(aChar) {
    return aChar.match(/[a-z]/i);
}


module.exports = palindromes


