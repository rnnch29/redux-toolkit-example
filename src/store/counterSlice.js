import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    counter: 0,
}

const counterSlice = createSlice({
    name: 'counterSlice',
    initialState: initialState,
    reducers: {
        increase: (state, action) => {
            state.counter += 1;
        },
        decrease: (state, action) => {
            state.counter -= 1;
        }
    }
})


export const { increase, decrease } = counterSlice.actions
export default counterSlice.reducer