import React from "react";
import { toast } from 'react-toastify';

class AddComponent extends React.Component {
    state = {
        name: '',
        baseSalary: '',
        workDays: '',
        allowance: ''
    }

    handleOnChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        let { name, baseSalary, workDays, allowance } = this.state;
        if (!name || !baseSalary || !workDays) {
            toast.error("Please enter all the information.");
            return;
        }

        // Tính lương tự động
        let finalSalary = Math.floor((parseFloat(baseSalary) / 26) * parseFloat(workDays) + (parseFloat(allowance) || 0));

        // Gửi dữ liệu lên App.js qua props
        this.props.addNewSalaryUser({
            id: Math.floor(Math.random() * 10000).toString(),
            name: name,
            salary: finalSalary,
            email: `${name.toLowerCase().replace(/\s/g, '')}@company.com`,
            avatar: `https://i.pravatar.cc/150?u=${name}`
        });

        this.setState({ name: '', baseSalary: '', workDays: '', allowance: '' });
        toast.success("Salary calculation successful!");
    }

    render() {
        let { name, baseSalary, workDays, allowance } = this.state;
        return (
            <div className='add-salary-container'>
                <form className="salary-form">
                    <div className="input-group">
                        <label>Employee's full name</label>
                        <input type="text" value={name} placeholder="Enter a name"
                            onChange={(event) => this.handleOnChangeInput(event, 'name')} />
                    </div>

                    <div className="input-row">
                        <div className="input-group">
                            <label>Basic salary ($)</label>
                            <input type="number" value={baseSalary} placeholder="Example: 3000"
                                onChange={(event) => this.handleOnChangeInput(event, 'baseSalary')} />
                        </div>
                        <div className="input-group">
                            <label>Number of working days</label>
                            <input type="number" value={workDays} placeholder="Max: 26"
                                onChange={(event) => this.handleOnChangeInput(event, 'workDays')} />
                        </div>
                    </div>

                    <div className="input-group">
                        <label>Allowance ($)</label>
                        <input type="number" value={allowance} placeholder="Allowance"
                            onChange={(event) => this.handleOnChangeInput(event, 'allowance')} />
                    </div>

                    <button type="submit" className="btn-submit"
                        onClick={(event) => this.handleSubmit(event)}>
                        Add to payroll
                    </button>
                </form>
            </div>
        )
    }
}

export default AddComponent;