import React from "react";
class AddComponent extends React.Component {

    state = {
        name: '',
        salary: '',
    }

    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleChangeSalary = (event) => {
        this.setState({
            salary: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        if (!this.state.name || !this.state.salary) {
            alert('Missing required parameters!')
        }
        console.log('>>>check data input ', this.state);
        this.props.addnewPerson({
            id: Math.floor(Math.random() * 1000), // Generate a random ID
            name: this.state.name,
            salary: this.state.salary

        })
        this.setState({
            name: '',
            salary: ''
        })
    }


    render() {
        return (

            <form>
                <label htmlFor="name">Name:</label><br />
                <input
                    type="text"
                    value={this.state.name}
                    onChange={(event) => this.handleChangeName(event)}
                /><br />

                <label htmlFor="salary">Salary:</label><br />
                <input
                    type="text"
                    value={this.state.salary}
                    onChange={(event) => this.handleChangeSalary(event)}
                /><br /><br />

                <input type="submit"
                    onClick={(event) => this.handleSubmit(event)} />
            </form>
        )

    }

}


export default AddComponent;