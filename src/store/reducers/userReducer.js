import { createReducer } from '@reduxjs/toolkit';
import { fetchUsers } from '../actions/userActions';
import { toast } from 'react-toastify';

const initialState = {
    list: [],
    status: 'idle', // 'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
};

const userReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchUsers.pending, (state) => {
            state.status = 'loading';
        })
        .addCase(fetchUsers.fulfilled, (state, action) => {
            state.status = 'succeeded';
            // Chỉ cập nhật nếu dữ liệu thực sự thay đổi
            if (JSON.stringify(state.list) !== JSON.stringify(action.payload)) {
                state.list = action.payload;
            }
        })
        .addCase(fetchUsers.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.payload;
            toast.error("Không thể tải danh sách nhân viên!");
        });
});

export default userReducer;