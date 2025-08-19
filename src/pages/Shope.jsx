import React from 'react';
import ProductCard from '../components/ProductCard';
import { useSelector } from 'react-redux';

function Shope() {
  // Get products from Redux
  const products = useSelector((state) => state.product.products || []);

  return (
    <div className='mx-auto py-12 px-4 md:px-16 lg:px-24'>
      <h2 className='text-2xl font-bold mb-4 text-center'>Shop</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 cursor-pointer'>
        {products.map((product, index) => (
          <ProductCard key={product.id || index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default Shope;
