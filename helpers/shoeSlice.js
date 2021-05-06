import { createSlice } from '@reduxjs/toolkit';


export const shoeSlice = createSlice({
    name: 'shoes',
    initialState: {
            id: "",
            title: "",
            description: "",
            image: "",
            price: 0,
            quantity: 0,
            selected: false
    },
    reducers: {
        addQuantity(state, action) {           
            console.log(action.payload)
               state.quantity += action.payload

        },
        addToCart(state, action) {

        }
    }
})


export const { addToCart, removeFromCart, addQuantity, subtractQuantity, emptyCart} = shoeSlice.actions;

export default shoeSlice.reducer;