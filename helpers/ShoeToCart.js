import { useSelector, useDispatch } from 'react-redux';
import { addShoe, decrement, incrementByAmount } from './shoeSlice';
import data from '../Briefcase/sneaks.json';
import { store } from '../lib/store';

export const ShoeToCart = ({ product }) => {
    const shoes = useSelector(state => state.shoes);

    const products =  data.map(prod => {
        const { id, title, image, description, price } = prod;
        return { id, title, image, description, price };
    })

    console.log(products)
    console.log(product)

    const dispatch = useDispatch();

    const addToCart = () => {
        if (product.id == products[0]) {
            dispatch(addShoe({
                id: product.id,
                title: product.title,
                description: product.description,
                image: product.image,
                price: product.price
            }))
        } else {
            console.log("didn't work");
        }
    }


    return (
        <div>
            <button type="button" class="bg-indigo-300 border-2 border-indigo-600 rounded-md text-3xl px-5 py-3 my-3 text-white" onClick={addToCart()}>
                Buy
            </button>
        </div>
    )
}
