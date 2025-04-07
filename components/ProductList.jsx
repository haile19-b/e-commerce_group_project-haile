'use client';
import React, { useState } from 'react';
import { Card, Button } from 'flowbite-react';
import Link from 'next/link';

const initialProducts = [
  {
    id: 1,
    name: 'Apple Watch Series 7 GPS',
    description: 'Aluminium Case, Starlight Sport',
    price: 599,
    originalPrice: 699,
    rating: 5.0,
    image: 'https://png.pngitem.com/pimgs/s/134-1341378_apple-watch-series-4-hd-png-download.png'
  },
  {
    id: 2,
    name: 'iPhone 13 Pro',
    description: '128GB, Graphite',
    price: 599,
    originalPrice: 699,
    rating: 4.8,
    image: 'https://png.pngitem.com/pimgs/s/134-1341378_apple-watch-series-4-hd-png-download.png'
  },
  {
    id: 3,
    name: 'MacBook Pro 14"',
    description: 'M1 Pro, 16GB RAM, 512GB SSD',
    price: 599,
    originalPrice: 699,
    rating: 4.9,
    image: 'https://png.pngitem.com/pimgs/s/134-1341378_apple-watch-series-4-hd-png-download.png'
  },
  {
    id: 4,
    name: 'AirPods Pro',
    description: '2nd Generation',
    price: 599,
    originalPrice: 699,
    rating: 4.7,
    image: 'https://png.pngitem.com/pimgs/s/134-1341378_apple-watch-series-4-hd-png-download.png'
  },
  {
    id: 5,
    name: 'iPad Air',
    description: 'M1 Chip, 64GB, Space Gray',
    price: 599,
    originalPrice: 699,
    rating: 4.6,
    image: 'https://png.pngitem.com/pimgs/s/134-1341378_apple-watch-series-4-hd-png-download.png'
  },
  {
    id: 6,
    name: 'Apple TV 4K',
    description: '32GB, Wi-Fi',
    price: 599,
    originalPrice: 699,
    rating: 4.5,
    image: 'https://png.pngitem.com/pimgs/s/134-1341378_apple-watch-series-4-hd-png-download.png'
  }
];

const additionalProducts = [
  {
    id: 7,
    name: 'HomePod mini',
    description: 'HomePod mini',
    price: 599,
    originalPrice: 699,
    rating: 4.4,
    image: 'https://techcrunch.com/wp-content/uploads/2020/11/2020-11-11-023348286.jpg?w=1024'
  },
  {
    id: 8,
    name: 'Magic Keyboard',
    description: 'For iPad Pro 11-inch',
    price: 599,
    originalPrice: 699,
    rating: 4.3,
    image: 'https://png.pngitem.com/pimgs/s/134-1341378_apple-watch-series-4-hd-png-download.png'
  }
];

export default function ProductList() {
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [allProducts] = useState([...initialProducts, ...additionalProducts]);

  const showMoreProducts = () => {
    setVisibleProducts(prev => prev + 2);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Our Products</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allProducts.slice(0, visibleProducts).map((product) => (
          <Link href={'/customer-facing/product/3'} key={product.id} >
          <Card
            className="max-w-sm hover:shadow-lg transition-shadow"
            imgAlt={product.name}
            imgSrc={product.image}
          >
           
              <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {product.name}
              </h5>
              <p className="text-gray-600 dark:text-gray-400 mt-1">{product.description}</p>
            
            <div className="mb-4 mt-2.5 flex items-center">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'text-yellow-300' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-3 mr-2 rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 dark:bg-cyan-200 dark:text-cyan-800">
                {product.rating}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <div className='flex flex-col'>
              <span className="text-3xl font-bold text-gray-900 dark:text-white">
                ${product.price}
              </span>
              <span className="font-bold text-gray-500 dark:text-white line-through">
                ${product.originalPrice}
              </span>
              </div>
              <button
                href="#"
                className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800"
              >
                Add to cart
              </button>
            </div>
          </Card>
          </Link>
        ))}
      </div>

      {visibleProducts < allProducts.length && (
        <div className="text-center mt-8">
          <Button
            onClick={showMoreProducts}
            color="light"
            className="px-6 py-3 border border-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Show More Products
          </Button>
        </div>
      )}
    </div>
  );
}