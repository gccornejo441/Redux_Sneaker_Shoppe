import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { connect } from 'react-redux';
import { addToCart }  from './shoeSlice';

const ShoeToCart = ({ product, addToCart }) => {


    return (
        <div>
            <button
            type="button" 
            class="bg-indigo-300 
            border-2 
            border-indigo-600 
            rounded-md text-3xl 
            px-5 py-3 my-3 
            text-white" 
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

