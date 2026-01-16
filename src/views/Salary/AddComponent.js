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
            <div className='add-salary-container'>
                <form className="salary-form">
                    <div className="input-group">
                        <label>Name</label>
                        <input
                            type="text"
                            placeholder="Enter name"
                            value={this.state.name}
                            onChange={(event) => this.handleChangeName(event)}
                        />
                    </div>

                    <div className="input-group">
                        <label>Salary</label>
                        <input
                            type="number"
                            placeholder="Enter salary"
                            value={this.state.salary}
                            onChange={(event) => this.handleChangeSalary(event)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="btn-submit"
                        onClick={(event) => this.handleSubmit(event)}
                    >Submit</button>
                </form>
            </div>
        )

    }

}


export default AddComponent;