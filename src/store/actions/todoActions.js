import { createAction } from '@reduxjs/toolkit';

export const addTodo = createAction('todo/add');
export const deleteTodo = createAction('todo/delete');
export const updateTodo = createAction('todo/update');