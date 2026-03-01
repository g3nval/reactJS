import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    { id: 'todo1', title: 'Financial Report Q3', department: 'Finance', deadline: '2026-06-30' },
    { id: 'todo2', title: 'Fix API Error', department: 'IT', deadline: '2026-06-25' },
    { id: 'todo3', title: 'Hiring React Dev', department: 'HR', deadline: '2026-07-01' },
];

export const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        deleteTodo: (state, action) => {
            return state.filter(todo => todo.id !== action.payload.id);
        },
        updateTodo: (state, action) => {
            const index = state.findIndex(todo => todo.id === action.payload.id);
            if (index !== -1) {
                state[index] = action.payload;
            }
        }
    }
});

export const { addTodo, deleteTodo, updateTodo } = todoSlice.actions;
export default todoSlice.reducer;