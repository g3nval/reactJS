import React, { useState } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, updateTodo } from '../../store/slices/todoSlice';
import { toast } from 'react-toastify';
import AddTodo from "./AddTodo";
import "./ListTodo.scss";

const ListToDo = () => {
    const listTodos = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const [editTodo, setEditTodo] = useState({});

    const handleDeleteTodo = (todo) => {
        dispatch(deleteTodo(todo));
        toast.error("Deleted successfully!");
    };

    const handleEditTodo = (todo) => {
        const isEmptyObj = Object.keys(editTodo).length === 0;

        // Logic Save
        if (!isEmptyObj && editTodo.id === todo.id) {
            dispatch(updateTodo(editTodo));
            setEditTodo({});
            toast.success("Updated successfully!");
            return;
        }

        // Logic Edit
        setEditTodo(todo);
    };

    const handleOnChangeEditTodo = (event) => {
        setEditTodo({ ...editTodo, title: event.target.value });
    };

    const isEmptyObj = Object.keys(editTodo).length === 0;

    return (
        <section className='ListToDo-container' aria-labelledby="todo-heading">
            <header>
                <h2 id="todo-heading">Task Management System</h2>
            </header>

            <AddTodo addNewTodo={(todo) => dispatch(addTodo(todo))} />

            <div className='list-todo-content' role="list">
                {listTodos && listTodos.length > 0 && listTodos.map((item, index) => (
                    <article className='todo-child' key={item.id} role="listitem">
                        <div className="todo-info">
                            {!isEmptyObj && editTodo.id === item.id ? (
                                <div className="edit-mode">
                                    <span>{index + 1} - </span>
                                    <input
                                        value={editTodo.title}
                                        onChange={handleOnChangeEditTodo}
                                        aria-label="Edit task title"
                                    />
                                </div>
                            ) : (
                                <div className="view-mode">
                                    <span className="index">{index + 1}.</span>
                                    <div className="details">
                                        <h3 className="title">{item.title}</h3>
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
                            <button className='edit' onClick={() => handleEditTodo(item)}>
                                {!isEmptyObj && editTodo.id === item.id ? "Save" : "Edit"}
                            </button>
                            <button className='delete' onClick={() => handleDeleteTodo(item)}>
                                Delete
                            </button>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default ListToDo;