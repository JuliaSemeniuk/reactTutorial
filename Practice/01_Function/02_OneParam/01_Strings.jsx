import React from 'react'

function addArticle(param) {
    return  'a '.concat(param)
}

function removeA(param) {
    return param.replace('a', '')
}

function allYouNeedIsLove(param) {
    return param.includes('love')
}

function removeSideSpaces(param) {
    return param.trim()
}

function convertToLowerCase(param) {
    return param.toLowerCase()
}

function convertToUpperCase(param) {
    return param.toUpperCase()
}

export default class StringsMethods extends React.Component {
    render() {
        const firstString = 'CAT';
        const secondString = 'dog';
        const thirdString = 'I love autumn';
        const fourthString = 'I hate summer';
        const fifthString = ' No Side Spaces ';

        const firstStringWithArticle = addArticle(firstString);
        const secondStringWithArticle = addArticle(secondString);

        const firstStringWithoutA = removeA(firstString);

        const thirdStringMustBeTrue = allYouNeedIsLove(thirdString);
        const fourthStringMustBeFalse = allYouNeedIsLove(fourthString);

        const fifthStringWithoutSideSpaces = removeSideSpaces(fifthString);

        const firstStringToLowerCase = convertToLowerCase(firstString);

        const secondStringToUpperCase = convertToUpperCase(secondString);


        return(
            <div>
                {firstStringWithArticle} <br/>
                {secondStringWithArticle} <br/>
                {firstStringWithoutA} <br/>
                {thirdStringMustBeTrue.toString()} <br/>
                {fourthStringMustBeFalse.toString()} <br/>
                {fifthStringWithoutSideSpaces} <br/>
                {firstStringToLowerCase} <br/>
                {secondStringToUpperCase}
            </div>
        )
    }
}