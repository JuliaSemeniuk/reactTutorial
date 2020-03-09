import React from 'react'

function concatTwoArrays (param1, param2) {
    return param1.concat(param2);
}

function includesMethod (param1, param2) {
    if (param1.includes(param2)) {
        return'true'
    } else {
        return 'false'
    }    
}

function pushNethod (param1, param2) {
    param1.push(param2)
    return (param1)
}

function popNethod (param1) {
    param1.pop()
    return (param1)
}

function shiftNethod (param1) {
    param1.shift()
    return (param1)
}

function unshiftNethod (param1, param2) {
    param1.unshift(param2)
    return (param1)
}

function joinNethod (param1, param2) {
    return param1.join(param2)
}

function multipltcationForEachMethod (param) {
    let result = 1;
    param.forEach(function(elem){
        result = result * elem
    });  
    return (result);  
}

function arithmeticMeanForEachMethod (param) {
    let result = 0;
    param.forEach(function(elem){
        result = result + elem
    });
    let sum = result / param.length;
    return (sum);  
}

function showSumOfEachIndex (param) {
    let sum = 0;
    param.forEach(function(elem, index){
        sum = sum + index
    });    
    return (sum);  
};

function replaceElement (param) {
    param.forEach(function(elem, index) {
        if (index === 2) {
            param[index] = 5
        };
    });
    return (param);
};

function replaceEvenNumbers (param) {
    param.forEach(function(elem, index) {
        if (elem % 2 === 0) {
            param[index] = 0
        };
    });
    return (param);
};

function findAinTheString (param) {
    let sayTruth = 'false';
    
    param.forEach(function(elem) {
        if (elem.includes('a')) {
            sayTruth = 'true'
        }
    });
    return (sayTruth)
};

function addFiveToAllElements (param) {
    const newFirstArray = param.map(value => value + 5);
    return (newFirstArray);
};

function convertNumbersToStrings (param) {
    const newSeventhArray = param.map(value => value.toString());
    console.log(newSeventhArray);
}

function createObject (param) {
    const result = param.map(function(value){
        return {name: value}
    });
    console.log(result)
}

export default class ArrayMethods extends React.Component{
    render () {
        const firstArray = [30, 40, 50];
        const secondArray = [60, 70, 80];
        const thirdArray = [90, 100, 110];
        const fourthArray = [1, 2, 3];
        const fifthArray = [7, 1, 2];
        const sixthArray = [10, 1, 1, 8];
        const seventhArray = [2, 4, 6]
        const eightArray = ['apple', 'kiwi']
        const firstNumber = 11;
        const firstString = 'Hello, Tony! :)';        

        const concatVar = concatTwoArrays(firstArray, secondArray);
        const includesVar = includesMethod(firstArray, firstNumber); // false
        const pushVar = pushNethod(firstArray, firstString);
        const popVar = popNethod(secondArray);
        const shiftVar = shiftNethod(thirdArray);
        const unshiftVar = unshiftNethod(fourthArray, firstString);
        const joinVar = joinNethod(fourthArray, firstString);
        const multipltcationForEachMethodVar = multipltcationForEachMethod(fifthArray);
        const arithmeticMeanForEachMethodVar = arithmeticMeanForEachMethod(sixthArray);
        const sumOfEachIndexVar = showSumOfEachIndex(sixthArray);
        const replaceElementVar = replaceElement(sixthArray);
        const replaceEvenNumbersVar = replaceEvenNumbers(seventhArray);
        const findAinTheStringVar = findAinTheString(eightArray);
        const addFiveToAllElementsVar = addFiveToAllElements(firstArray);
        const convertNumbersToStringsVar = convertNumbersToStrings(seventhArray);
        const createObjectVar= createObject(eightArray);
    
        return (
            <div>
                {concatVar} <br/>
                {includesVar} <br/>
                {pushVar} <br/>
                {popVar} <br/>
                {shiftVar} <br/>
                {unshiftVar} <br/>
                {joinVar} <br/>
                {multipltcationForEachMethodVar} <br/>
                {arithmeticMeanForEachMethodVar} <br/>    
                {sumOfEachIndexVar}   <br/> 
                {replaceElementVar} <br/> 
                {replaceEvenNumbersVar} <br/>
                {findAinTheStringVar} <br/>
                {addFiveToAllElementsVar} <br/>
                {convertNumbersToStringsVar} <br/>
                {createObjectVar}

            </div>
        )
    }
}