import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    mode: "dark",
};

export const globalSlice = createSlice({
    name: "global",
    initialState,
    reducers: {
        setMode: (state) => {
            state.mode = state.mode === "light" ? "dark" : "light"; // toggle mode between light and dark
        },
    },
});

export const { setMode } = globalSlice.actions;

export default globalSlice.reducer;