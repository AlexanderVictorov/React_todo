import {combineReducers, configureStore} from "@reduxjs/toolkit";
import todoSlice from "./slice/todos";

const rootReducer = combineReducers({
    todos: todoSlice,
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});