import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./books/reduser";
import filterReducer from "./slices/filterSlice";
export const store = configureStore({
    reducer: {
        books: booksReducer,
        filter: filterReducer,
    },
});
