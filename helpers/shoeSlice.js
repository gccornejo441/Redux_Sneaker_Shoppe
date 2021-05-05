import { createSlice } from '@reduxjs/toolkit';

const initialState = [
    {
        id: "",
        title: "",
        description: "",
        image: "",
        price: 0
      }
]

export const shoeSlice = createSlice({
    name: 'shoes',
    initialState,
    reducers: {
        addShoe(state, action) {
            state.push(action.payload);
        },
        decrement(state) {
            state.value--
        },
        incrementByAmount(state, action) {
            state.value += action.payload
        }
    }
})

export const { addShoe, decrement, incrementByAmount } = shoeSlice.actions;

export default shoeSlice.reducer;