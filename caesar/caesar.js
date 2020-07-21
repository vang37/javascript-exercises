const caesar = function (str, num) {
    let array_from_string = [];

    for (let i = 0; i < str.length; i++) {
        array_from_string[i] = String.fromCharCode(valueCheck(str[i].charCodeAt()));
    }

    return array_from_string.join("");

    function valueCheck(value) {
        if (((value > 64) && (value < 91)) && (((value + num % 26) > 64) && ((value + num % 26) < 91))) { return value + num % 26 }
        else if (((value > 96) && (value < 123)) && (((value + num % 26) > 96) && ((value + num % 26) < 123))) { return value + num % 26 }
        else if ((value > 64) && (value < 91) && (num > 0)) { return value - 26 + num % 26 }
        else if ((value > 64) && (value < 91) && (num < 0)) { return value + 26 + num % 26 }
        else if ((value > 96) && (value < 123) && (num > 0)) { return value - 26 + num % 26 }
        else if ((value > 96) && (value < 123) && (num < 0)) { return value + 26 + num % 26 }
        else return value;
    }
}



module.exports = caesar
