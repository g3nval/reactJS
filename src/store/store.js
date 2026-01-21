import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers/rootReducer';

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false, // Tắt check strict để tránh lỗi warning nhỏ không cần thiết
        }),
});