import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function ShoppingCart({ cart }) {
    const [ cartCount, setCartCount ] = useState(0);

    useEffect(() => {
        let count = 0;
        cart.forEach(item => {
            count += item.quantity;
        });

        setCartCount(count);
    })
    console.log("cart: ", cart);

    return (
        <div class="border-2 border-indigo-500 rounded-md mx-5">
            <div class="p-5 text-right">
                <span class="text-indigo-500 text-lg md:text-3xl font-bold">Shopping Cart</span>
            <ul>
                <li>
                 <span class="text-indigo-500 text-lg md:text-3xl font-light">Items: {cartCount}</span>
                </li>
            </ul>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    }
}

export default connect(mapStateToProps)(ShoppingCart)