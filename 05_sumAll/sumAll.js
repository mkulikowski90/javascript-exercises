const sumAll = function(firstNum,lastNum) {
    function isNumber(value) {
        return typeof value === 'number';
    }
    
    let sum = 0;

    if (!isNumber(firstNum)|| !isNumber(lastNum)){
        return ("ERROR");
    }

    if (firstNum <= 0){
        return ("ERROR");
    }

    if (lastNum <= firstNum){
        const temp = firstNum;
        firstNum = lastNum;
        lastNum = temp;
    }

    for(let i = firstNum;firstNum <= lastNum ;i++){
        sum = sum + i;
        firstNum++;
    }
    console.log(sum);
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
