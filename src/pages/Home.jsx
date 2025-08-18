import React, { useEffect } from 'react';
import { categories, MocData } from '../assets/MocData';
import shope from '../assets/images/shope.jpg';
import Infosection from './Infosection';
import Categores from '../components/Categores';
import { setProducts } from '../redux/productSlice';
import { useDispatch, useSelector } from 'react-redux'
import ProductCard from "../components/ProductCard";


function Home() {
  const dispatch = useDispatch();

  // Safely access products array from Redux state
  const products = useSelector((state) => state.product.product || []);

  useEffect(() => {
    dispatch(setProducts(MocData));
  }, [dispatch]);

  return (
    <div className='bg-white mt-2 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto py-4 flex flex-col md:flex-row space-x-4'>
        {/* Left sidebar */}
        <div className='w-full md:w-3/12'>
          <div className='bg-red-600 text-white text-xs font-bold px-2 py-2.5'>
            Shop by categories
          </div>
          <ul className='space-y-4 bg-gray-100 p-3 border'>
            {categories.map((category, index) => (
              <li key={index} className='flex items-center text-sm font-medium'>
                <div className='w-2 h-2 border border-red-500 rounded-full mr-2'></div>
                {category}
              </li>
            ))}
          </ul>
        </div>

        {/* Image container */}
        <div className='w-full md:w-9/12 relative mt-8 md:mt-0 h-96 rounded-md overflow-hidden'>
          <img src={shope} alt='shop' className='h-full w-full object-cover' />

          {/* Text overlay */}
          <div className='absolute top-1/2 right-10 transform -translate-y-1/2 bg-opacity-50 p-6 rounded-md max-w-xs text-white'>
            <h2 className='text-4xl font-bold mb-4'>Welcome to Shop</h2>
            <button className='bg-red-600 px-6 py-2 rounded-md hover:bg-red-700 transition'>
              Shop Now
            </button>
          </div>
        </div>
      </div>

      <Infosection />
      <Categores />

      {/* Top Products */}
      <div className='mt-10'>
  <h2 className='text-2xl font-bold mb-4'>Top Products</h2>
  <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4'>
    {(products?.slice(0, 5) || []).map((product) => (
      <ProductCard key={product.id} product={product} />
    ))}
  </div>
</div>

      </div>
    
  );
}

export default Home;
