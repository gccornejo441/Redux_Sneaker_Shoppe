import ShoppingCart from '../components/ShoppingCart';
import { ShoeToCart } from '../helpers/ShoeToCart';
import  ProductCard from '../components/ProductCards';
import Nav from '../components/nav';

export const Home = () => {
  
  return (
    <div class="container mx-auto">
      <Nav/>
      <h1 class="text-center text-6xl text-indigo-500 font-bold p-5">Super Sneaker Shop</h1>
      <p class="text-center text-2xl text-indigo-800 font-bold p-5">We <span class="uppercase text-red-600">dont</span> claim to sell these sneakers.</p>
      <ShoppingCart/>
      <ProductCard/>
  </div>
  );
}

export default Home;
