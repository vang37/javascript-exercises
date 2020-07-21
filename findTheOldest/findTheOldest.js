


let findTheOldest = function(array) {
    let max;
    array.reduce((a, b) => {
        if (getAge(b) >= a) {
            max = b;
            return Math.max(a, getAge(b));
        }
        else return Math.max(a, getAge(b));
    }, getAge(array[0]));
    return max


    function getAge(object) {
        if (!("yearOfDeath" in object)) {
            object["yearOfDeath"] = new Date().getFullYear();
            return object.yearOfDeath - object.yearOfBirth;
        }
        else if (!object.yearOfBirth) return "Person does not exist yet. ALso: existence not guaranteed.";
        else return object.yearOfDeath - object.yearOfBirth;
    }
}

module.exports = findTheOldest
