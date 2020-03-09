import React from 'react'
import Task from './03_Task'

export default class ToDoList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            list: [],
        };
    };

    componentDidMount() {
        let list;

        list = window.localStorage.getItem('list');

        if (!list) {
            const str = JSON.stringify([{id: 1, text:'text', isFinished: false}]);
            window.localStorage.setItem('list', str);
            list = str;
        }

        console.log('localStorage', list);

        const parsedList = JSON.parse(list);

        this.setState({
            list: parsedList
        });
    }

    onChangeIsFinished = (index) => {

        const { list } = this.state;

        const newList = list.slice();

        const newElem = newList[index];

        newList[index] = {
            id: newElem.id,
            text: newList[index].text,
            isFinished: !newList[index].isFinished,
        };

        this.setState({list: newList});

        const stringifiedNewList = JSON.stringify(newList);

        console.log(stringifiedNewList)

        window.localStorage.setItem('list', stringifiedNewList);
    }

    render () {
        const { list } = this.state;
        return (
            <table border ='1' align="left" width="300">
                {list.map((val, index) => {
                    return (
                        <Task
                            key={index}
                            index4545={index}
                            text={val.text}
                            isJu={true}
                            isFinished={val.isFinished}
                            onChangeIsFinished={this.onChangeIsFinished}
                        />
                    )
                })}
            </table>
        )
    }
}