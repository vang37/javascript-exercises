const reverseString = function(str) {
     var splitString = str.split(""); 
     var reverseArray = splitString.reverse(); 
     var joinArray = reverseArray.join(""); 
     return joinArray
}

module.exports = reverseString
