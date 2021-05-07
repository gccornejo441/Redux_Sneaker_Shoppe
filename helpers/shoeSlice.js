import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    shoes: [
        {
            "id": "price_1ImtIgG3MtoJKZ2HbhGjflEa",
            "title": "Zoomx Invincible Run Flyknit",
            "description": "Best shoes on the market!",
            "image": "/zoomx-invincible-run-flyknit.jpg",
            "price": 120.00,
            "quantity": 1,
            "selected": false
          },
          {
            "id": "price_abcd0002",
            "title": "Killshot 2 Leather Mens Shoe",
            "description": "Best and last sneaks you'll ever buy!",
            "image": "/killshot-2-leather-mens-shoe.jpg",
            "price": 120.00,
            "quantity": 1,
            "selected": false
          },
          {
            "id": "price_abcd0003",
            "title": "Court Legacy Mens Shoe",
            "description": "These legacy...!",
            "image": "/court-legacy-mens-shoe.jpg",
            "price": 90.00,
            "quantity": 1,
            "selected": false
          }
    ],
    cart: [], 
    currentItem: null,
}

export const shoeSlice = createSlice({
    name: 'shoes',
    initialState,
    reducers: {
        addToCart: {
            reducer(state, action) {
            const item = state.shoes.find(shoe => shoe.id === action.payload.id)
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
        removeFromCart(state, action) {
            return {
                ...state, cart: state.cart.filter(item => item.id !== action.payload.id),
            };
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