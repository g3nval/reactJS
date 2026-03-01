import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
    listSalaries: [
        { id: 1, name: 'John', salary: 5000, department: 'IT' },
        { id: 2, name: 'Maria', salary: 8000, department: 'Operations' },
        { id: 3, name: 'Admin', salary: 3000, department: 'HR' }
    ]
};

export const salarySlice = createSlice({
    name: 'salary',
    initialState,
    reducers: {
        addNewPerson: (state, action) => {
            state.listSalaries.push(action.payload);
            toast.success("Đã thêm nhân sự mới thành công!");
        },
        deletePerson: (state, action) => {
            state.listSalaries = state.listSalaries.filter(item => item.id !== action.payload.id);
            toast.success("Đã xóa nhân sự khỏi danh sách!");
        },
        updateSalary: (state, action) => {
            const { id, newSalary } = action.payload;
            const index = state.listSalaries.findIndex(item => item.id === id);
            if (index !== -1) {
                state.listSalaries[index].salary = newSalary;
                toast.info("Đã cập nhật mức lương mới!");
            }
        }
    }
});

export const { addNewPerson, deletePerson, updateSalary } = salarySlice.actions;
export default salarySlice.reducer;