const repeatString = function(string, num) {
    let val = ""
    let i = 0
    if (num < 0) {
        return 'ERROR'
    }
    while (i < num) {
       val += string; 
       i++
    }
    return val
};

// Do not edit below this line
module.exports = repeatString;
