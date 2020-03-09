import React from 'react'

function removeArticleTheAndSpace(param) {
    return param.replace('the ', '')
}

export default class OneParameterString extends React.Component {
    render() {
        const firstString = 'the cat'
        const stringWithNoArticle = removeArticleTheAndSpace(firstString)

        const secondString = 'the dog'
        const secondStringWithNoArticle = removeArticleTheAndSpace(secondString)

        /* lines 18-21 do the same thing as 9-13.
             uncomment lines 18-21 and comment 9-13 to try */

        // const firstString = 'the cat'
        // const stringWithNoArticle = firstString.replace('the ', '')
        // const secondString = 'the dog'
        // const secondStringWithNoArticle = secondString.replace('the ', '')

        return (
            <div>
                <div>{stringWithNoArticle}</div>
                <div>{secondStringWithNoArticle}</div>
            </div>
        )
    }
}
