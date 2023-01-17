import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/User";
import todosReducer from "./features/ToDos"

export type RootState = ReturnType<typeof store.getState>

export const store = configureStore({
    reducer: {
        user: userReducer,
        todos: todosReducer
    }
})