const convertToCelsius = function(value) {
    return Math.round((value - 32) * (5/9) * 10) /10;
  };
  
  const convertToFahrenheit = function(value) {
    return Math.round((value * 1.8 + 32) * 10) /10;
  };
  
  // Do not edit below this line
  module.exports = {
    convertToCelsius,
    convertToFahrenheit
  };  