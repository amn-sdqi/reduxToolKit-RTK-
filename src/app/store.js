import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../features/Todo/todo.slice";

export const store = configureStore({
	reducer: todoReducer,
});
