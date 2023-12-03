const repeatString = function(text, n) {
    if (n < 0){
        return "ERROR"
    }

    let result = "";
    for (i = 0; i < n; i++){
        result += text;
    }   
    return result;
};

// Do not edit below this line
module.exports = repeatString;