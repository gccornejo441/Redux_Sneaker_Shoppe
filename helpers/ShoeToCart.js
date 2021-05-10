import React from 'react';
import { connect } from 'react-redux';
import { addToCart }  from './shoeSlice';

const ShoeToCart = ({ product, addToCart }) => {

    return (
        <div class="flex justify-center">
            <button
            type="button" 
            class="bg-indigo-300 border-2 border-indigo-600 rounded-md text-2xl px-3 py-1 text-white" 
            onClick={() => addToCart(product.id)}
            >
                Buy
            </button>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
    }
}

export default connect(null, mapDispatchToProps)(ShoeToCart);

