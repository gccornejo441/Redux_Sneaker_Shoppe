import Image from 'next/image';
import products from '../Briefcase/sneaks.json';
import { ShoeToCart } from '../helpers/ShoeToCart';
import ShoppingCart from '../components/ShoppingCart';

export const Home = () => {
  
  return (
    <div class="container mx-auto">
      <ShoppingCart/>
      <h1 class="text-center text-6xl text-indigo-500 font-bold p-5">Super Sneaker Shop</h1>
      <p class="text-center text-2xl text-indigo-800 font-bold p-5">We <span class="uppercase text-red-600">dont</span> claim to sell these sneakers.</p>
      <ul class="flex justify-around">
        {products.map(product => {
          return (
            <li key={product.id}>
              <a class="flex flex-col">
              <p class="text-center text-xl text-indigo-800 font-bold p-5">{product.title}</p>
              <Image src={product.image} alt={product.title} height="500" width="400"/>
              <p class="text-center text-2xl text-indigo-800 font-bold p-5">{product.description}</p>
              <p class="text-center text-2xl text-indigo-800 font-bold p-5">${product.price}</p>
              <div class="mx-auto">
              <ShoeToCart product={product}/>
              </div>
              </a>
            </li>
          )
        })}
      </ul>
  </div>
  );
}

export default Home;
