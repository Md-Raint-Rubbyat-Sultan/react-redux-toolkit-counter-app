import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const loadComments = createAsyncThunk('comments/loadComments', async (url) => {
    const res = await axios.get(url);
    return res.data;
})

export const comments = createSlice({
    name: "comments",
    initialState: {
        isLoading: false,
        allComments: [],
        error: null
    },
    extraReducers: (builder) => {
        builder.addCase(loadComments.pending, (state) => {
            state.isLoading = true,
                state.allComments = [],
                state.error = null
        });
        builder.addCase(loadComments.fulfilled, (state, action) => {
            state.isLoading = false,
                state.allComments = action.payload,
                state.error = null
        });
        builder.addCase(loadComments.rejected, (state, action) => {
            state.isLoading = false,
                state.allComments = [],
                state.error = action.error.message
        });
    },
})

export default comments.reducer;