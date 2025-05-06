import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './todoSlice'
import filterReducer from './filterslice'
import cartReducer from './cartSlice'
import { loadState, saveState } from "../utils/localStorage";

const persistedState = loadState()

export const store = configureStore({
    reducer : {
        todos : todoReducer,
        filter : filterReducer,
        cart : cartReducer
    },
    preloadedState : persistedState,
    middleware : (getDefaultMiddleware) => 
        getDefaultMiddleware().concat((store) => (next) => (action) => {
            const result = next(action);
            saveState(store.getState());
            return result;
          }),

});