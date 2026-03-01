import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchAllUsers = createAsyncThunk(
    'users/fetchAllUsers',
    async () => {
        const response = await axios.get('https://api.escuelajs.co/api/v1/users');
        return response.data;
    }
);

const userSlice = createSlice({
    name: 'users',
    initialState: {
        listUsers: [],
        isLoading: false,
        isError: false
    },
    reducers: {
        // Các logic đồng bộ
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchAllUsers.pending, (state) => {
                state.isLoading = true;
                state.isError = false;
            })
            .addCase(fetchAllUsers.fulfilled, (state, action) => {
                state.listUsers = action.payload;
                state.isLoading = false;
                state.isError = false;
            })
            .addCase(fetchAllUsers.rejected, (state) => {
                state.isLoading = false;
                state.isError = true;
            });
    }
});

export default userSlice.reducer;