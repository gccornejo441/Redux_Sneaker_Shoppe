import { connect } from "react-redux";
import Image from 'next/image';
import ShoeToCart from '../helpers/ShoeToCart';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';


const ProductCard = ({ shoes }) => {
    return (
        <ul class="flex lg:justify-around flex-col lg:flex-row">
        {shoes.map(product => (
            <li key={product.id} class="m-5 xl:w-1/2">
              <a class="flex flex-col">
              <p class="text-center text-2xl text-indigo-800 font-bold p-5">{product.title}</p>
              <Image src={product.image} alt={product.title} height="500" width="400"/>
              <p class="text-center text-base text-indigo-800 font-bold p-5">{product.description}</p>
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