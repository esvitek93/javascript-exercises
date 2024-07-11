const fibonacci = function(val) {
    val = parseInt(val)
    let curr = 1
    let prev = 0
    if (val < 0) return "OOPS"
    if (val === 0) return 0
    for (let i=1; i<val; i++) {
        let temp = curr
        curr += prev    
        prev = temp
    }
    return curr
};

// Do not edit below this line
module.exports = fibonacci;
