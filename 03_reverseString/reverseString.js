const reverseString = function(string) {
    let stringArray = string.split("");
    let reversedArray = []
    for(let i=stringArray.length-1; i >= 0; i--) {
        reversedArray.push(stringArray[i])
    }
    return reversedArray.join("");
};

// Do not edit below this line
module.exports = reverseString;
