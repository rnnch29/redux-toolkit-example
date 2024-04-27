import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import itReducer from "./itSlice";
import counterReducer from "./counterSlice";


export const store = configureStore({
    reducer: {
        // Store name 
        userReducer,
        itReducer,
        counterReducer
    }
})