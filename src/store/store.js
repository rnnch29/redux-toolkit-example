import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import itSlice from "./itSlice";

export const store = configureStore({
    reducer: {
        // Store name 
        userStore: userSlice,
        it: itSlice
    }
})