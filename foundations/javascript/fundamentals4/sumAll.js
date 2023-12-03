const sumAll = function(n1, n2) {
    if (!Number.isInteger(n1) || !Number.isInteger(n2)) return "ERROR";
    if (n1 < 0 || n2 < 0) return "ERROR";

    let lowerLimit = n1 <= n2 ? n1: n2;
    let upperLimit = n1 <= n2 ? n2 : n1;
    let result = 0;

    for (i = lowerLimit; i <= upperLimit; i++){
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
