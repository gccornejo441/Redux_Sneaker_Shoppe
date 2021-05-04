import Image from 'next/image';
import products from '../Briefcase/sneaks.json';
import { AddShoe } from '../helpers/AddShoe';

export const Home = () => {
  
  return (
    <div class="container mx-auto">
      <h1 class="text-center text-6xl text-indigo-500 font-bold p-5">Super Sneaker Shop</h1>
      <p class="text-center text-2xl text-indigo-800 font-bold p-5">We <span class="uppercase text-red-600">dont</span> claim to sell these sneakers.</p>

      <ul class="flex justify-around">
        {products.map(product => {
          return (
            <li>
              <a class="flex flex-col">
              <p class="text-center text-xl text-indigo-800 font-bold p-5">{product.title}</p>
              <Image src={product.image} alt={product.title} height="500" width="400"/>
              <div class="mx-auto">
              <button class="bg-indigo-300 border-2 border-indigo-600 rounded-md text-3xl px-5 py-3 my-3 text-white">Buy</button>
              </div>
              </a>
            </li>
          )
        })}
      </ul>
      <AddShoe/>
  </div>
  );
}

export default Home;
