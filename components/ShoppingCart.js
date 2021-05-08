import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Link from 'next/link';

function ShoppingCart({ cart }) {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity;
    });

    setCartCount(count);
  });
  console.log("cart: ", cart);

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
            <Link href='/'>
              <a class="bg-indigo-300 border-2 border-indigo-600 rounded-md text-xl px-3 py-1 text-white">
                Check Out
              </a>
            </Link>
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
