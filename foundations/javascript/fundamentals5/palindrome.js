const palindromes = function (str) {
    const processedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reverseStr = processedStr.split("").reverse().join("");
    return  processedStr == reverseStr;
};