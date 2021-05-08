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
        <div class="border-2 border-indigo-500 absolute right-0">
            <div class="text-indigo-500 text-3xl p-5">Shopping Cart</div>
            <ul>
                <li>
                    {cartCount}
                </li>
            </ul>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.shop.cart,
    }
}

export default connect(mapStateToProps)(ShoppingCart)