import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/counterSlice";
import commentsReducer from "../features/Comments/commentsSlice";


export const store = configureStore({
    reducer: {
        counter: counterReducer,
        comments: commentsReducer,
    },
})