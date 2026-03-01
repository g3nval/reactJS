import React, { useState } from "react";
import { toast } from 'react-toastify';
import "./AddTodo.scss";

const AddTodo = ({ addNewTodo }) => {
    const [task, setTask] = useState({ title: '', department: 'Operations', deadline: '' });
    const departments = ["Operations", "Finance", "Marketing", "Sales", "IT", "HR"];

    const handleChange = (e, field) => {
        setTask({ ...task, [field]: e.target.value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!task.title || !task.department || !task.deadline) {
            toast.error('Missing required fields (Title, Dept or Deadline)!');
            return;
        }

        addNewTodo({
            id: Math.floor(Math.random() * 10000),
            ...task
        });

        // Reset form
        setTask({ title: '', department: 'Operations', deadline: '' });
    };

    return (
        <section className='add-todo-container' aria-label="Add new task">
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <div className='input-group'>
                        <label htmlFor="task-title">Task Name:</label>
                        <input id="task-title" type='text' placeholder="Enter task..."
                            value={task.title} onChange={(e) => handleChange(e, 'title')} />
                    </div>

                    <div className='input-group'>
                        <label htmlFor="task-dept">Department:</label>
                        <select id="task-dept" value={task.department} onChange={(e) => handleChange(e, 'department')}>
                            {departments.map(item => <option key={item} value={item}>{item}</option>)}
                        </select>
                    </div>

                    <div className='input-group'>
                        <label htmlFor="task-deadline">Deadline:</label>
                        <input id="task-deadline" type='date' value={task.deadline} onChange={(e) => handleChange(e, 'deadline')} />
                    </div>

                    <button type="submit" className='btn-add'>Add Task</button>
                </div>
            </form>
        </section>
    );
};

export default AddTodo;