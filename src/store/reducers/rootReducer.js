import { combineReducers } from 'redux';
import userReducer from './userReducer';
import todoReducer from './todoReducer';
import authReducer from './authReducer';
import salaryReducer from './salaryReducer';

const rootReducer = combineReducers({
    users: userReducer,
    todos: todoReducer,
    auth: authReducer,
    salary: salaryReducer
});

export default rootReducer;