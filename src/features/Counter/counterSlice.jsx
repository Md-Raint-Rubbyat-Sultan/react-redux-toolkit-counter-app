import { createSlice } from "@reduxjs/toolkit";

export const counter = createSlice({
    name: "counter",
    initialState: { count: 0 },
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        reset: (state) => {
            state.count = 0;
        },
        incrementByAmount: (state, actions) => {
            state.count += actions.payload;
        },
        decrementByAmount: (state, actions) => {
            state.count -= actions.payload;
        },
    }
});

export const { increment, decrement, reset, incrementByAmount, decrementByAmount } = counter.actions;

export default counter.reducer;