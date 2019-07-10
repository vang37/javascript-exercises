const sumAll = function(a,b) {
 
    if (isNaN(a) || isNaN(b)) {
        return 'ERROR';
    }
    else if (typeof a === "string" || typeof b === "string") {
        return 'ERROR';
    }
    else if (a < 0 || b < 0) {
        return 'ERROR';
    }
    else if (a > b) {
        return (((a - b)*(a + b +1)) / 2) + 1;
    }
    else if (b > a) {
        return (((b - a)*(a + b +1)) / 2) + 1;
    }
    else if (a == b) {
        return "0";
    }
    
    
}

module.exports = sumAll
