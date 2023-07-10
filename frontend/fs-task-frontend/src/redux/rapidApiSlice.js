import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    countryDetail: null
}

export const rapidApiSlice = createSlice({
    name: 'api',
    initialState,
    reducers: {
        setCountryDetail: (state, action) => {
            state.countryDetail = action.payload;

        },
        createCountryDetail: (state, action) => {
            state.countryDetail = [action.payload, ...state.countryDetail]
        }

    }
});

export const { setCountryDetail, createCountryDetail } = rapidApiSlice.actions;
export default rapidApiSlice.reducer;