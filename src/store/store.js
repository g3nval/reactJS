import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import todoReducer from './slices/todoSlice';
import userReducer from './slices/userSlice';
import salaryReducer from './slices/SalarySlice';

const store = configureStore({
    reducer: {
        auth: authReducer,
        todos: todoReducer,
        users: userReducer,
        salary: salaryReducer,
    }
});

export default store;