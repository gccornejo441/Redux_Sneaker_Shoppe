import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

function ShoppingCart({ cart }) {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    let count = 0;
    cart.forEach((item) => {
      count += item.quantity;
    });

    setCartCount(count);
  });



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
            <button onClick={handleClick} class="bg-indigo-300 border-2 border-indigo-600 rounded-md text-xl px-3 py-1 text-white">
                Check Out
              </button>
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

const handleClick = async (event) => {
    const stripe = await stripePromise;
    const response = await fetch("/api/create-checkout-session", {
      method: "POST",
    });
    const session = await response.json();
    // When the customer clicks on the button, redirect them to Checkout.
    const result = await stripe.redirectToCheckout({
      sessionId: session.id,
    });
    if (result.error) {
      // If `redirectToCheckout` fails due to a browser or network
      // error, display the localized error message to your customer
      // using `result.error.message`.
    }
  };


export default connect(mapStateToProps)(ShoppingCart);
