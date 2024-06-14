const reverseString = function(string) {
    const stringLen = string.lenght;

    let stringLetterArray = [...string];

    stringLetterArray.reverse();
    let reverseString = stringLetterArray.join("")

    return reverseString
};

// Do not edit below this line
module.exports = reverseString;