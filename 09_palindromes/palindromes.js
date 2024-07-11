const palindromes = function (string) {
    string = string.toLowerCase()
    let array = string.split("");
    let regex = /[a-z0-9]/
    let filtered = array.filter((c) => regex.test(c))
    let reversed = [];
    for (let i=filtered.length-1; i>=0; i--) {
        reversed.push(filtered[i])
    }
    filtered = filtered.toString()
    reversed = reversed.toString()
    return filtered === reversed ? true : false
};

// Do not edit below this line
module.exports = palindromes;
