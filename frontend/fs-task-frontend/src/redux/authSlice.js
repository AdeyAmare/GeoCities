import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    user: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null,
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signupUser: (state, action) => {
            state.user = action.payload;

        },
        loginUser: (state, action) => {
            state.user = action.payload
        },
        logoutUser: (state) => {
            state.user = null;
        }

    }
});

export const { signupUser, loginUser, logoutUser } = authSlice.actions;
export default authSlice.reducer;