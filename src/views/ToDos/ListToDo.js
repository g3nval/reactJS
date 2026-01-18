import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';

class ListToDo extends React.Component {

    state = {
        listTodos: [
            { id: 'todo1', title: 'Financial Report Q3', department: 'Finance', deadline: '2026-06-30' },
            { id: 'todo2', title: 'Fix API Error', department: 'IT', deadline: '2026-06-25' },
            { id: 'todo3', title: 'Hiring React Dev', department: 'HR', deadline: '2026-07-01' },
        ],
        editTodo: {}
    }

    addNewTodo = (todo) => {
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })
        toast.success("Add successfully!")
    }

    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodos
        })
        toast.success("Delete successfully!")
    }

    handleEditTodo = (todo) => {
        let { editTodo, listTodos } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        // Logic Save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            let listTodosCopy = [...listTodos];
            let objIndex = listTodosCopy.findIndex((item => item.id === todo.id));

            // Chỉ update title, giữ nguyên department và deadline cũ
            listTodosCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success("Update successfully!")
            return;
        }

        // Logic Edit
        this.setState({
            editTodo: todo
        })
    }

    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let { listTodos, editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        return (
            <div className='ListToDo-container'>
                <h2>Simple React App with Department Tasks</h2>

                {/* Truyền hàm addNewTodo xuống con */}
                <AddTodo addNewTodo={this.addNewTodo} />

                <div className='list-todo-content'>
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => {
                            return (
                                <div className='todo-child' key={item.id}>
                                    <div className="todo-info">
                                        {isEmptyObj === true ?
                                            // VIEW MODE
                                            <div className="view-mode">
                                                <span className="index">{index + 1}.</span>
                                                <div className="details">
                                                    <span className="title">{item.title}</span>
                                                    <div className="meta">
                                                        {/* Hiển thị Badge phòng ban */}
                                                        <span className={`badge ${item.department.toLowerCase()}`}>
                                                            {item.department}
                                                        </span>
                                                        <span className="date">⏳ {item.deadline}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            :
                                            //EDIT MODE
                                            <>
                                                {editTodo.id === item.id ?
                                                    <div className="edit-mode">
                                                        <span>{index + 1} - </span>
                                                        <input
                                                            value={editTodo.title}
                                                            onChange={(event) => this.handleOnChangeEditTodo(event)}
                                                        />
                                                    </div>
                                                    :
                                                    // Nếu đang edit dòng khác thì dòng này vẫn hiển thị bình thường
                                                    <div className="view-mode">
                                                        <span className="index">{index + 1}.</span>
                                                        <div className="details">
                                                            <span className="title">{item.title}</span>
                                                            <span className={`badge ${item.department.toLowerCase()}`}>{item.department}</span>
                                                        </div>
                                                    </div>
                                                }
                                            </>
                                        }
                                    </div>

                                    <div className="todo-actions">
                                        <button className='edit' onClick={() => this.handleEditTodo(item)}>
                                            {isEmptyObj === false && editTodo.id === item.id ? "Save" : "Edit"}
                                        </button>
                                        <button className='delete' onClick={() => this.handleDeleteTodo(item)}>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default ListToDo;