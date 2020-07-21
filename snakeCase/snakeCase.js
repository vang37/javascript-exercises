const snakeCase = function (str) {
    if ((/([a-zA-Z0-9][~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-\s]+)/g).exec(str)) {
        for (i = str.length - 1; ;) {
            if ((/[~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-\s]+/).exec(str[i])) {
                str = str.slice(0, -1);
                i--;
            }
            else break;
        }
        return str.split(/[~`!@#$%^&*(){}\[\];:"'<,.>?\/\\|_+=-\s]+/).join("_").toLowerCase();
    }
    if ((/([a-z][A-Z0-9])+/g).exec(str)) {
        let ind = (/([a-z][A-Z])/g).exec(str).index;
        let left = str.slice(0, ind + 1).toLowerCase();
        let right = str.slice(ind + 1).toLowerCase();
        return left + "_" + right;
    }
}

module.exports = snakeCase
