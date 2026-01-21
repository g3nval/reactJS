import { createReducer } from '@reduxjs/toolkit';
import { login, logout } from '../actions/authActions';
import { toast } from 'react-toastify';

const initialState = {
    isLoggedIn: false,
    currentUser: null
};

const authReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(login, (state, action) => {
            state.isLoggedIn = true;
            state.currentUser = action.payload; // Lưu thông tin tài khoản vừa đăng nhập
            toast.success(`Welcome ${action.payload.name} (${action.payload.role})!`);
        })
        .addCase(logout, (state) => {
            state.isLoggedIn = false;
            state.currentUser = null;
            toast.info("Logged out successfully.");
        });
});

export default authReducer;