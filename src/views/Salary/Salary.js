import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';

class Salary extends React.Component {


    state = {

        arraypeople: [
            { id: '1', name: 'Jhon', age: '30', salary: '1000' },
            { id: '2', name: 'Maria', age: '25', salary: '2000' },
            { id: '3', name: 'Admin', age: '20', salary: '3000' }

        ]
    }
    addnewPerson = (person) => {
        console.log('>>>check data from parent: ', person);
        this.setState({
            arraypeople: [...this.state.arraypeople, person]
        });
    }

    deletePerson = (person) => {
        let currentPerson = this.state.arraypeople;
        currentPerson = currentPerson.filter(item => item.id !== person.id)
        this.setState({
            arraypeople: currentPerson
        })
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(">> run didUpdate:", 'prevState: ', prevState, 'currentState: ', this.state);
    }

    componentDidMount() {
        console.log('>>>call componentDidMount');
    }

    render() {
        console.log('>>>call render: ', this.state);
        return (
            <>
                <AddComponent
                    addnewPerson={this.addnewPerson}
                />

                <ChildComponent
                    arraypeople={this.state.arraypeople}
                    deletePerson={this.deletePerson}
                />
            </>
        );

    }

}
export default Salary;
