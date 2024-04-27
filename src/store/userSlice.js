import { createSlice } from "@reduxjs/toolkit";


//set state
const initialState = {
    value: 'Hello world redux/toolkit',
    user:[],
    loading: false,
}


export const userSlice =  createSlice({
    name: 'userStore',
    initialState: initialState,
    reducers: {
        login:(state, action)=>{
            state.value = 'Login';
            state.user = action.payload
            state.loading = true;
        },
        logout:(state)=> {
            state.value = 'Logout'
            state.loading = false;
        }
    }
})

// export function 
export const { login, logout } = userSlice.actions
export default userSlice.reducer