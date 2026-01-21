import { createReducer } from '@reduxjs/toolkit';
import { addSalaryUser, deleteSalaryUser } from '../actions/salaryActions';
import { toast } from 'react-toastify';

const initialState = [
    { id: '1', name: 'Jhon', age: '30', salary: '1000' },
    { id: '2', name: 'Maria', age: '25', salary: '2000' },
    { id: '3', name: 'Admin', age: '20', salary: '3000' }
];

const salaryReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(addSalaryUser, (state, action) => {
            state.push(action.payload);
            toast.success("Thêm bảng lương mới thành công!");
        })
        .addCase(deleteSalaryUser, (state, action) => {
            const newState = state.filter(item => item.id !== action.payload.id);
            toast.error("Đã xóa bảng lương!");
            return newState;
        });
});

export default salaryReducer;