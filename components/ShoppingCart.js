import React from 'react';
import { useSelector } from 'react-redux';

export default function ShoppingCart() {
    const shoes = useSelector(state => state.shoes);
    
    return (
        <div class="border-2 border-indigo-500 absolute right-0">
            <div class="text-indigo-500 text-3xl p-5">Shopping Cart</div>

            <ul>
                <li>{shoes.title}</li>
            </ul>
        </div>
    )
}
