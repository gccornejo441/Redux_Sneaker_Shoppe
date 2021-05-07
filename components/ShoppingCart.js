import React from 'react';
import { useSelector } from 'react-redux';

import { connect } from 'react-redux';

function ShoppingCart() {


    return (
        <div class="border-2 border-indigo-500 absolute right-0">
            <div class="text-indigo-500 text-3xl p-5">Shopping Cart</div>
            <ul>
                <li></li>
            </ul>
        </div>
    )
}

export default ShoppingCart