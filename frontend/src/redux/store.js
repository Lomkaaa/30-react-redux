import { configureStore } from "@reduxjs/toolkit";
import { booksReducer } from "./books/reduser";
export const store = configureStore({
    reducer: {
        books: booksReducer,
    },
});
