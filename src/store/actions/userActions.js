import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Action gọi API lấy danh sách User
export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',
    async (_, { getState, rejectWithValue }) => {
        try {

            const { users } = getState();
            if (users.list.length > 0) {
                return users.list;
            }


            const response = await axios.get('https://api.escuelajs.co/api/v1/users');
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);