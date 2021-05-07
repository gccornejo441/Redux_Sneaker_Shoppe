import { useSelector, useDispatch } from 'react-redux';
import { store } from '../lib/store';
import { useState } from 'react';

export const ShoeToCart = ({product}) => {
    const shoes = useSelector(state => state.shoes);

    const [ setShoe ] = useState('2');

    const dispatch = useDispatch();

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
            onClick={() => dispatch(addQuantity(Number(setShoe)))}
            >
                Buy
            </button>
            <div></div>
        </div>
    )
}
