import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
};

const filterSlice = createSlice({
    name: "filter",
    initialState: initialState,
    reducers: {
        setTitleFilter: (state, action) => {
            // return { ...state, title: action.payload };   можно так
            state.title = action.payload; //библиотека immer (не меняем текущее состояние)
        },
        resetFilter: (state) => {
            return initialState;
        },
    },
});
//export const setTitleFilter = filterSlice.actions.setTitleFilter; можно так импортироват функции
//
//
export const { setTitleFilter, resetFilter } = filterSlice.actions;
export const selectTitleFilter = (state) => state.filter.title;

export default filterSlice.reducer;
