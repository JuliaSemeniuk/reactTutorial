import React from 'react'
import { zip } from 'rxjs';

function findBiggest (array) {
    let theBiggestOne = array[0];
    array.forEach(function(value, index){
        if (theBiggestOne < array[index+1]) {
            theBiggestOne = array[index+1]
        };
    });
    return (theBiggestOne);
};

function findSmaller (array) {
    let theSmallerOne = array[0];
    array.forEach(function(value, index){
        if (theSmallerOne > array[index+1]) {
            theSmallerOne = array[index+1]
        };
    });
    return (theSmallerOne);
};

function findBiggestAndSmaller (array) {
    let theBiggestOne = array[0];
    array.forEach(function(value, index){
        if (theBiggestOne < array[index+1]) {
            theBiggestOne = array[index+1]
        };
    });

    let theSmallerOne = array[0];
    array.forEach(function(value, index){
        if (theSmallerOne > array[index+1]) {
            theSmallerOne = array[index+1]
        };
    });

    const newObj = {max: theBiggestOne, min: theSmallerOne};

    return ('max: ' + newObj.max + ' min: ' + newObj.min);
};

function findAllNegativeNumbers (array) {
    let newArr = [];
    array.forEach(function(value, index){
        if (array[index] < 0) {
            newArr.push(array[index]);
        };
    });
    return (newArr);
};

function findAllWordsWithDoubleR (array) {
    let newArr = [];
    array.forEach(function(value){
        if (value.includes('rr')) {
            newArr.push(value);
        };
    });
    return (newArr);
};

function countFiveNumbers (array) {
    let counter = 0;
    array.forEach(function(value){
        if (value === 5) {
            counter = counter + 1
        };
    });
    return (counter);
};

function countStrWithA (array) {
    let counter = 0;
    array.forEach(function(value){
        if (value.includes('a')) {
            counter = counter + 1;
        }
    });
    return (counter);
};

function showOnlyNames (array) {
    const newArr = array.map(value => value.name);
    return (newArr);
};

function addIdToObject (array) {
    let newArr = array.map((value, index) => ({index: index, name: value.name, age: value.age}));
    console.log(newArr);
    return newArr.map(value => ('Name: ' + value.name + '. ' + 'Age: ' + value.age + '. ' + 'Index: ' + value.index + '. '));
};

function getAgDistribution (array) {
   let newArr = array.map(function(value){
        if (value.age > 45) {
           return ({middleAge: false, name: value.name, age:value.age})
        } else {
           return ({middleAge: true, name: value.name, age:value.age})
        };
    });
    console.log(newArr);

    return newArr.map(value => ('Name: ' + value.name + '. ' + 'Age: ' + value.age + '. ' + 'Middle Age ' + value.middleAge + '. '));
};


function replaceNameToLastname (object) {
    const newObj = {id: object.id, height: object.height, lastname: 'Sememiuk'}  
    return ('id: ' + newObj.id + '. height: ' + newObj.height + '. lastname: ' + newObj.lastname);
};

function replaceNameToLastnameInObjArrAndAddFixAge (array) {
    
    let newArr = array.map(value => ({id: value.id, height: value.height, lastname: value.name, age: 28+5}));
    console.log(newArr)
    
    return newArr.map(value => ('Id: ' + value.id + '. ' + 'Height: ' + value.height + '. ' + 'LastName ' + value.lastname + '. ' + 'Age ' + value.age + '.'))
};

function showActive (array) {
    const result = array.filter(value => value.isActive === true);
    return ('Id: ' + result[0].id + '. ' + 'Active: ' + result[0].isActive + '. ' + 'Name ' + result[0].name + '. ' );
};



export default class ArrayMethodsExtra extends React.Component {
    render() {
        const firstArr = [15, -11, -13, 10, -14, 17];
        const secArr = ['apple', 'berries', 'cantaloupe', 'cherries'];
        const thirdArr = [2, 5, 2, 5, 3, 5];

        const fourthArr = [{name: 'Ilon', age: 48}, {name: 'Victoria', age: 500}, {name: 'Joey', age: 26}];
        const fifthArr = {id: 1, height: 164, name: 'Ju'};
        const sixthArr = [{id: 1, height: 164, name: 'Ju'}, {id: 2, height: 175, name: 'Tony'}]
        const seventhArr = [{ id: 1, isActive: false, name: 'T'}, { id: 2, isActive: false, name: 'J' }, { id: 3, isActive: true, name: 'L'}, { id: 3, isActive: false, name: 'Q'}]

        const findBiggestVar = findBiggest(firstArr);
        const findSmallerVar = findSmaller(firstArr);
        const findBiggestAndSmallerVar = findBiggestAndSmaller(firstArr);
        const findAllNegativeNumbersVar = findAllNegativeNumbers(firstArr);
        const findAllWordsWithDoubleRVar = findAllWordsWithDoubleR(secArr);
        const countFiveNumbersVar = countFiveNumbers(thirdArr);
        const countStrWithAVar = countStrWithA(secArr);
       
        const showOnlyNamesVar = showOnlyNames(fourthArr);
        const addIdToObjectVar = addIdToObject(fourthArr);
        const getAgDistributionVar = getAgDistribution(fourthArr);

        const replaceNameToLastnameVar = replaceNameToLastname(fifthArr);
        const replaceNameToLastnameInObjArrAndAddFixAgeVar = replaceNameToLastnameInObjArrAndAddFixAge(sixthArr);

        const showActiveVar = showActive(seventhArr);

        return (
            <div>
                <p><b>.forEach()</b></p>
                <p>1. Функция, которая найдет наибольшее значение числа в массиве [15, -11, -13, 10, -14, 17]. <b>Ответ:</b> {findBiggestVar}</p>
                <p>2. Функция, которая найдет наименьшее значение числа в массиве [15, -11, -13, 10, -14, 17]. <b>Ответ:</b> {findSmallerVar}</p>
                <p>3. Функция, которая найдет наибольшее и наименьшее значение в массиве [15, -11, -13, 10, -14, 17]. <b>Ответ:</b> {findBiggestAndSmallerVar}</p>
                <p>4. Функция, которая найдет все значения ниже нуля в массиве [15, -11, -13, 10, -14, 17]. <b>Ответ:</b> {findAllNegativeNumbersVar.join(', ')}</p>
                <p>5. Функция, которая найдет все строки в массиве ['apple', 'berries', 'cantaloupe', 'cherries'], в которые входят символы ‘rr’. <b>Ответ:</b> {findAllWordsWithDoubleRVar.join(', ')}</p>
                <p>6. Функция, которая вернет колличество раз, которое в массиве [1, 5, 2, 5, 3, 5] встречается число 5. <b>Ответ:</b> {countFiveNumbersVar}</p>
                <p>7. Функция, которая вернет количество строк, в которых есть символ ‘a’ в массиве ['apple', 'berries', 'cantaloupe', 'cherries']. <b>Ответ:</b> {countStrWithAVar}</p>
                <p>8. Функция, которая вернет число, которое встречается в массиве больше раз, чем другие. <b>Ответ:</b> </p>
                <p><b>.map()</b></p>
                <p>1. Функция, которая получает массив объектов: [(name: 'Ilon', age: 48), (name: 'Victoria', age: 500), (name: 'Joey', age: 26)] - и вернет массив имен: ‘Ilon’. <b>Ответ:</b> {showOnlyNamesVar.join(', ')}</p>
                <p>2. Функция, которая получает массив объектов: [(name: 'Ilon', age: 48) и вернет массив таких же объектов с дополнительным полем id, в котом будет порядковый номер текущего объекта в массиве. <b>Ответ:</b> {addIdToObjectVar}</p>
                <p>3. Функция, которая получает массив объектов вида [name: ‘Mister T’, age: 30] и вернет новый массив объектов с полем isMiddleAged, которое будет true у тех, кому больше 45, у остальных false. <b>Ответ:</b> {getAgDistributionVar}</p>
                <p><b>+ на обьекты и массивы</b></p>
                <p>1. Функция принимает объект вида [id: 1, height: 164, name: 'Ju'] и вернет объект вида [id: 1, height: 175, surname: 'Ju']. <b>Ответ:</b>{replaceNameToLastnameVar} </p>
                <p>2,3,4. функция принимает массив объектов вида [id: 1, height: 164, name: 'Ju'] и вернет массив объектов вида [id: 1, height: 164, name: 'Ju']  <b>Ответ:</b>{replaceNameToLastnameInObjArrAndAddFixAgeVar} </p>
                <p>5. Функция, которая получает массив объектов вида [id: 1, isActive: false, name: 'T']. В массиве нужно найти и вернуть из функции объект, у которого поле isActive === true.<b>Ответ:</b>{showActiveVar} </p>
            </div>
        )
    }
}