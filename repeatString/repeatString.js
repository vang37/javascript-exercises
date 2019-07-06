const repeatString = function (str, num) {
    if (num < 0){return 'ERROR'};
    let text = '';
    for (i = 0; i < num; i++) {
        text = text + str;
    }
    return text;
}
module.exports = repeatString
