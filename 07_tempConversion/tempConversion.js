const convertToCelsius = function(tempToConvert) {
  let tempToReturn = (((tempToConvert - 32) * 5/9));
  
  tempToReturn = Math.round(tempToReturn * 10) / 10;

  return tempToReturn;

};

const convertToFahrenheit = function(tempToConvert) {
  let tempToReturn = (tempToConvert * 9/5) + 32;

  tempToReturn = Math.round(tempToReturn * 10) / 10;

  return tempToReturn;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
