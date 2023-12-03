const reverseString = function(text) {
    let result = "";
    let len = text.length -1;
    for (i = len; i >= 0; i--){
        result += text[i];
    }
    return result;
};

// Do not edit below this line
module.exports = reverseString;
