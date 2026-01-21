import React from "react";
import "./ListTodo.scss";
import AddTodo from "./AddTodo";
import { toast } from 'react-toastify';
import { connect } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from '../../store/actions/todoActions';

class ListToDo extends React.Component {
    state = {
        editTodo: {}
    }

    handleDeleteTodo = (todo) => {
        this.props.dispatchDeleteTodo(todo);
        toast.error("Deleted successfully!");
    }

    handleEditTodo = (todo) => {
        let { editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        // Logic Save
        if (isEmptyObj === false && editTodo.id === todo.id) {
            this.props.dispatchUpdateTodo(editTodo); // Gửi object đã sửa lên Redux
            this.setState({ editTodo: {} });
            toast.success("Updated successfully!");
            return;
        }

        // Logic Edit
        this.setState({ editTodo: todo });
    }

    handleOnChangeEditTodo = (event) => {
        let editTodoCopy = { ...this.state.editTodo };
        editTodoCopy.title = event.target.value;
        this.setState({ editTodo: editTodoCopy });
    }

    render() {
        let { listTodos } = this.props;
        let { editTodo } = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;

        return (
            <div className='ListToDo-container'>
                <h2>Task Management System</h2>
                <AddTodo addNewTodo={(todo) => this.props.dispatchAddTodo(todo)} />

                <div className='list-todo-content'>
                    {listTodos && listTodos.length > 0 &&
                        listTodos.map((item, index) => (
                            <div className='todo-child' key={item.id}>
                                <div className="todo-info">
                                    {isEmptyObj === false && editTodo.id === item.id ? (
                                        <div className="edit-mode">
                                            <span>{index + 1} - </span>
                                            <input
                                                value={editTodo.title}
                                                onChange={(event) => this.handleOnChangeEditTodo(event)}
                                            />
                                        </div>
                                    ) : (
                                        <div className="view-mode">
                                            <span className="index">{index + 1}.</span>
                                            <div className="details">
                                                <span className="title">{item.title}</span>
                                                <div className="meta">
                                                    <span className={`badge ${item.department.toLowerCase()}`}>
                                                        {item.department}
                                                    </span>
                                                    <span className="date">⏳ {item.deadline}</span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
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
                        ))
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    listTodos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
    dispatchAddTodo: (todo) => dispatch(addTodo(todo)),
    dispatchDeleteTodo: (todo) => dispatch(deleteTodo(todo)),
    dispatchUpdateTodo: (todo) => dispatch(updateTodo(todo))
});

export default connect(mapStateToProps, mapDispatchToProps)(ListToDo);