import { createSlice } from '@reduxjs/toolkit';
import shoes from '../sneakerData/sneaks.json';

const initialState = {
    shoes,
    cart: [], 
    currentItem: null,
}

export const shoeSlice = createSlice({
    name: 'shoes',
    initialState,
    reducers: {
        addToCart: {
            reducer(state, action) {
            const item = state.shoes.find(shoe => shoe.id === action.payload.id);
            const inCart = state.cart.find(item => item.id === action.payload.id ? true : false);
            return {
                ...state, cart: inCart ? state.cart.map(item => item.id === action.payload.id ? {...item, quantity: item.quantity + 1 } : item) : [...state.cart, {...item, quantity: 1}]
            }
          },
          prepare(itemID) {
            return {
              payload: {
                id: itemID,
              }
            }
          }
        },
        removeFromCart: {
            reducer(state, action) {
            return {
                ...state, cart: state.cart.filter(item => item.id !== action.payload.id),
            }
        },
        prepare(itemID) {
            return {
              payload: {
                id: itemID,
              }
            }
          }
        },
        adjustQty(state, action) {
            return {
                ...state, cart: state.cart.map(item => item.id === action.payload.id ? {...item, quantity: action.payload.quantity} : item)
            }
        },
        loadCurrentItem(state, action) {
            return {
                ...state, currentItem: action.payload
            }
        }
    }
})


export const { addToCart, removeFromCart, adjustQty, loadCurrentItem } = shoeSlice.actions;

export default shoeSlice.reducer;