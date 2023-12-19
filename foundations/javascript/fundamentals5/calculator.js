const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const sum = function(arr) {
    return arr.reduce((total, n) => { return total + n}, 0); 
};

const multiply = function(arr) {
    return arr.reduce((total, n) => {return total * n});
}

const power = function(a, b) {
    return b == 0 ?  1 : a * power(a, b-1);
};

const factorial = function(a) {
    return (a == 1 || a == 0) ? 1 : a * factorial(a-1);
};