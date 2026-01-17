import React from 'react';
import ChildComponent from './ChildComponent';
import AddComponent from './AddComponent';
import "./Salary.scss"

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
        let { listUsers, addNewSalaryUser, deleteSalaryUser } = this.props;
        return (
            <>
                <div className="salary-container">
                    <h2 className="salary-title">Salary Management</h2>
                    <div className="salary-body">
                        <AddComponent
                            addNewSalaryUser={addNewSalaryUser}
                        />

                        <ChildComponent
                            arraypeople={listUsers}
                            deletePerson={deleteSalaryUser}
                        />
                    </div>
                </div>
            </>
        );

    }

}
export default Salary;
