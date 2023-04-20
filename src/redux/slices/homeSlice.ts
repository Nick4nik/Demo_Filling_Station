import { RootState } from '../store';
import { createSlice } from '@reduxjs/toolkit';

interface IHomeState {
};

const initialState: IHomeState = {
};

export const homeSlice = createSlice({
    name: 'home',
    initialState,
    reducers: {
    },
});

export const homeReducer = homeSlice.reducer;

export const {
} = homeSlice.actions;

// export const selectUser = (state: RootState) => state.homeReducer.user;