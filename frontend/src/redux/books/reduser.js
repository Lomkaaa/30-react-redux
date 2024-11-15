import * as a from "./actionTypes";
const initialState = [];
export const booksReducer = (state = initialState, action) => {
    switch (action.type) {
        case a.ADD_BOOK:
            return [...state, action.payload];

        default:
            return state;
    }
};
