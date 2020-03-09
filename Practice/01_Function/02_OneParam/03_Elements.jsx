import React from 'react'

function showFirstElementsFromStructure3(){
    const structure3 = [ [ [ 1 ], [ 2, 4 ] ], [ [ 6 ] ] ]
    structure3.map(function(elem){
        console.log(elem[0][0])
    }) 
}

function showLastElementsFromStructure2(){
    const structure2 = [ [1, 2, 4], [5, 7] ]
    structure2.map(function(elem){
        console.log(elem[elem.length-1])
    }) 
}



export default class Elements extends React.Component {
    render () {

        const structure = [1, 2, 3] //- достать элемент "2"
        
        const structure2 = [ [1, 2, 4], [5, 7] ] //- достать элемент "4"

        const structure3 = [ [ [ 1 ], [ 2, 4 ] ], [ [ 6 ] ] ] //- достать элемент "4"

        const structure4 = { a: 5, b: 6 }//- достать элемент 6

        const structure5 = { a: { c: 5 }, b: { d: 6 } }// - достать элемент 6

        const structure6 = { a: { c: { d: 3}, e: 2 }, f: { g: { m: 1 } } } //- достать элементы d, e, m

        const structure7 = { a: [ 1, 2, 3 ], b: [ 5, 7 ] } //- достать элемент 3

        const structure8 = { a: [ { name: 'Ju', id: 1 } ] }// - достать name

        const structure9 = [ { a: { name: 'Ju', id: 1 } } ]// - достать name

        const structure10 = [ { a: [ { name: 'Ju', id: 1 } ] } ]// - достать name

        showFirstElementsFromStructure3();
        showLastElementsFromStructure2()

        return (
            <div>
                {structure[1]} <br/>
                {structure2[0][2]} <br/>
                {structure3[0][1][1]} <br/>
                {structure4.b} <br/>
                {structure5.b.d} <br/>
                {structure6.a.c.d}, {structure6.a.e}, {structure6.f.g.m} <br/>
                {structure7.a[2]} <br/>
                {structure8.a[0].name}  <br/>
                {structure9[0].a.name} <br/>
                {structure10[0].a[0].name} <br/>

            </div>
        )
    }

}


