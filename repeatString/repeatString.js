const repeatString = function (str, num) {
    if (num < 0){return 'ERROR'};
    let text = '';
    for (let i = 0; i < num; i++) {
        text += str;
    }
    return text;
}
module.exports = repeatString
