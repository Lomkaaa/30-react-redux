import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    title: "",
    author: "",
    onlyFavorite: false,
};

const filterSlice = createSlice({
    name: "filter",
    initialState: initialState,
    reducers: {
        setTitleFilter: (state, action) => {
            // return { ...state, title: action.payload };   можно так
            state.title = action.payload; //библиотека immer (не меняем текущее состояние)
        },
        resetFilter: () => {
            return initialState;
        },
        setAuthorFilter: (state, action) => {
            state.author = action.payload;
        },
        setOnlyFavorite: (state) => {
            state.onlyFavorite = !state.onlyFavorite;
        },
    },
});
//export const setTitleFilter = filterSlice.actions.setTitleFilter; можно так импортироват функции
//
//
export const { setTitleFilter, resetFilter, setAuthorFilter, setOnlyFavorite } =
    filterSlice.actions;
export const selectTitleFilter = (state) => state.filter.title;
//
//
export const selectAuthorFilter = (state) => state.filter.author;

//
//
export const selectOnlyFavorite = (state) => state.filter.onlyFavorite;
export default filterSlice.reducer;
