import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { initiateCheckout } from '../helpers/checkout';

function ShoppingCart({ cart }) {
  const [cartCount, setCartCount] = useState(0);
  const [itemId, setItemId] = useState('')

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity;
    });
    setCartCount(count);
  });

  useEffect(() => {
    let ID_KEY = '';
    cart.forEach(item => {
        ID_KEY = item.id;
    })
    setItemId(ID_KEY);
})

  return (
    <div class="border-b border-t border-indigo-500 mx-5">
      <div class="p-5 text-right">
        <span class="text-indigo-500 text-lg md:text-3xl font-bold">
          Shopping Cart
        </span>
        <ul>
          <li>
            <span class="text-indigo-500 text-lg md:text-3xl font-light">
              Items:&nbsp;{cartCount}
            </span>
          </li>
          <li class="mt-2">
            <button class="bg-indigo-300 border-2 border-indigo-600 rounded-md text-xl px-3 py-1 text-white" onClick={() => {
                initiateCheckout({
                  lineItems: [
                    {
                      price: itemId,
                      quantity: 1
                    }
                  ]
                })
              }}>Check Out</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(ShoppingCart);
