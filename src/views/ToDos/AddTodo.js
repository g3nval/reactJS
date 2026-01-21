import React from "react";
import { toast } from 'react-toastify';
import "./AddTodo.scss";

class AddTodo extends React.Component {
    state = {
        title: '',
        department: 'Operations',
        deadline: ''
    }

    departments = ["Operations", "Finance", "Marketing", "Sales", "IT", "HR"];

    handleOnChangeTitle = (event) => {
        this.setState({ title: event.target.value })
    }

    handleOnChangeDepartment = (event) => {
        this.setState({ department: event.target.value })
    }

    handleOnChangeDeadline = (event) => {
        this.setState({ deadline: event.target.value })
    }


    handleSubmit = (event) => {

        event.preventDefault();

        let { title, department, deadline } = this.state;

        // Validate dữ liệu: Phải nhập đủ cả 3
        if (!title || !department || !deadline) {
            toast.error('Missing required fields (Title, Dept or Deadline)!');
            return;
        }

        let todo = {
            id: Math.floor(Math.random() * 10000),
            title: title,
            department: department,
            deadline: deadline
        }

        this.props.addNewTodo(todo);

        // Reset form sau khi add
        this.setState({
            title: '',
            department: 'Operations',
            deadline: ''
        })
    }

    render() {
        let { title, department, deadline } = this.state;
        return (
            <div className='add-todo-container'>

                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <div className="form-row">
                        <div className='input-group'>
                            <label>Task Name:</label>
                            <input type='text'
                                placeholder="Enter task..."
                                value={title}
                                onChange={(event) => this.handleOnChangeTitle(event)}

                            />
                        </div>

                        <div className='input-group'>
                            <label>Department:</label>
                            <select
                                value={department}
                                onChange={(event) => this.handleOnChangeDepartment(event)}
                            >
                                {this.departments.map(item => (
                                    <option key={item} value={item}>{item}</option>
                                ))}
                            </select>
                        </div>

                        <div className='input-group'>
                            <label>Deadline:</label>
                            <input type='date'
                                value={deadline}
                                onChange={(event) => this.handleOnChangeDeadline(event)}
                            />
                        </div>



                        <button type="submit" className='btn-add'>
                            Add Task
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default AddTodo;