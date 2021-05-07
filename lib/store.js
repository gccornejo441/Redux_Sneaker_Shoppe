import { configureStore } from '@reduxjs/toolkit';
import shoeReducer from '../helpers/shoeSlice';

export const store = configureStore({
    reducer: {
        shop: shoeReducer,
    }
})