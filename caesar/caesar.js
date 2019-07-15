const caesar = function (str, num) {
    let newArray = [];
    let newArray1 = [];
    let newArray2 = [];
    var array = str.split(/(\s+)/);

    for (i = 0; i < array.length; i++) {
        var n = array[i];
        for (k = 0; k < n.length; k++) {
            var x = n.charCodeAt(k);
            newArray.push(x);
        }
    }

    newArray1 = newArray.map(
        function (value) {
            if (((value > 64) && (value < 91)) && (((value + num % 26) > 64) && ((value + num % 26) < 91))) { return value + num % 26 }
            else if (((value > 96) && (value < 123)) && (((value + num % 26) > 96) && ((value + num % 26) < 123))) { return value + num % 26 }
            else if ((value > 64) && (value < 91) && (num > 0)) { return value - 26 + num % 26 }
            else if ((value > 64) && (value < 91) && (num < 0)) { return value + 26 + num % 26 }
            else if ((value > 96) && (value < 123) && (num > 0)) { return value - 26 + num % 26 }
            else if ((value > 96) && (value < 123) && (num < 0)) { return value + 26 + num % 26 }
            return value;
        }
    )

    for (j = 0; j < newArray1.length; j++) {
        var val = newArray1[j];
        newArray2.push(String.fromCharCode(val));
    }

    return newArray2.join("");
}

module.exports = caesar
