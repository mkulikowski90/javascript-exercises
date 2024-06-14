const repeatString = function(phrase, numOfRepeats) {
    let stringToReturn = "";
    
    if (numOfRepeats < 0){
        return "ERROR"
    }

    for(i = 0; i < numOfRepeats; i++){
        stringToReturn += phrase
    }
    return stringToReturn;
};

// Do not edit below this line
module.exports = repeatString;
