const removeFromArray = function(arr, ...nums) {
    return arr.filter(x => !nums.includes(x));

};

// Do not edit below this line
module.exports = removeFromArray;
