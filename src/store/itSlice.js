import { createSlice } from "@reduxjs/toolkit";


//set state
const initialState = {
    value: 'it store',
    user:[],
    loading: false,
}


export const itSlice =  createSlice({
    name: 'itStore',
    initialState: initialState,
    reducers: {
        // function 

    }
})

// export function 
export default itSlice.reducer