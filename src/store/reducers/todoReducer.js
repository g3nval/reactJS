import { createReducer } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, updateTodo } from '../actions/todoActions';

const initialState = [
    { id: 'todo1', title: 'Financial Report Q3', department: 'Finance', deadline: '2026-06-30' },
    { id: 'todo2', title: 'Fix API Error', department: 'IT', deadline: '2026-06-25' },
    { id: 'todo3', title: 'Hiring React Dev', department: 'HR', deadline: '2026-07-01' },
];

const todoReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addTodo, (state, action) => {
            state.push(action.payload); // payload: {id, title, department, deadline}
        })
        .addCase(deleteTodo, (state, action) => {
            return state.filter(item => item.id !== action.payload.id);
        })
        .addCase(updateTodo, (state, action) => {
            const index = state.findIndex(todo => todo.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload; // Cập nhật toàn bộ object
            }
        });
});

export default todoReducer;