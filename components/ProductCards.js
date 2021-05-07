import { connect } from "react-redux";
import Image from 'next/image';
import ShoeToCart from '../helpers/ShoeToCart';

const ProductCard = ({ shoes }) => {
    return (
        <ul class="flex justify-around">
        {shoes.map(product => (
            <li key={product.id}>
              <a class="flex flex-col">
              <p class="text-center text-xl text-indigo-800 font-bold p-5">{product.title}</p>
              <Image src={product.image} alt={product.title} height="500" width="400"/>
              <p class="text-center text-2xl text-indigo-800 font-bold p-5">{product.description}</p>
              <p class="text-center text-2xl text-indigo-800 font-bold p-5">${product.price}</p>
              <div class="mx-auto">
              </div>
              </a>
              <ShoeToCart product={product}/>
            </li>
        ))}
      </ul>
    )
}

const mapStateToProps = (state) => {
    return {
        shoes: state.shop.shoes,
    }
}

export default connect(mapStateToProps)(ProductCard);