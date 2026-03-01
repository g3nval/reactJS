import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

const initialState = {
    isLoggedIn: false,
    currentUser: null,
};

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            const { username, password } = action.payload;

            if (username === 'admin' && password === '123') {
                state.isLoggedIn = true;
                state.currentUser = { username: 'admin', role: 'Admin' };
                toast.success('Đăng nhập Admin thành công!');
            }
            else if (username === 'customer' && password === '1234') {
                state.isLoggedIn = true;
                state.currentUser = { username: 'customer', role: 'Customer' };
                toast.success('Đăng nhập Customer thành công!');
            }
            else {
                toast.error('Tài khoản hoặc mật khẩu không chính xác!');
            }
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.currentUser = null;
            toast.info('Đã đăng xuất khỏi hệ thống!');
        }
    }
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;