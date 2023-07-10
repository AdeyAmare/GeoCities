import { configureStore } from "@reduxjs/toolkit";
import authReducer from './authSlice'
import apiReducer from './rapidApiSlice'


export const store = configureStore({
    reducer: {
        authReducer: authReducer,
        apiReducer: apiReducer
    }
})