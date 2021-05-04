import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        "id": "price_abcd0003",
    "title": "Space Jelly Combo",
    "description": "These legacy...!",
    "image": "/court-legacy-mens-shoe.jpg",
    "price": 90.00
}
]

export const shoeSlice = createSlice({
    name: 'shoes',
    initialState,
    reducers: {

    }
})


export default shoeSlice.reducer;