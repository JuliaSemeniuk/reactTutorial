import React from 'react'

function showTrueIfNumberIsFive(param) {
    if (param === 5) {
        console.log(true)
    } else {
        console.log(false)
    }
}

function showTrueIfNumberIsBetween7and12(param) {
    if (param > 7 && param < 12) {
        console.log(Boolean(1))
    } else {
        console.log(Boolean(0))
    }
}

function showTrueIfNumberIsSmaller0AndEqual3(param) {
    if (param < 0 || param === 3) {
        console.log(true)
    } else {
        console.log(false)
    }
}

function showTrue(param) {
    if (param % 3 === 0 || param % 5 === 0) {
        console.log(true)
    } else {
        console.log(false)
    }
}

export default class BooleanFunctions extends React.Component {
    render () {
       // showTrueIfNumberIsFive(5);
       // showTrueIfNumberIsFive(10);

       // showTrueIfNumberIsBetween7and12(9);
       // showTrueIfNumberIsBetween7and12(1);

       //showTrueIfNumberIsSmaller0AndEqual3(-123);
      // showTrueIfNumberIsSmaller0AndEqual3(3);
      // showTrueIfNumberIsSmaller0AndEqual3(12);

       showTrue(9);
       showTrue(15);
       showTrue(11);


        return (
            <div>

            </div>
        )
    }
}