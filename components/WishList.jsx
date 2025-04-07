"use client";
import React, { useState } from 'react';
import { Card, Button } from 'flowbite-react';
import { FiShoppingBag, FiHeart, FiTrash2 } from 'react-icons/fi';

function WishList() {
  const [wishlist, setWishlist] = useState([
    {
      id: 1,
      name: 'Wireless Headphones',
      price: '$129.99',
      originalPrice: '$159.99',
      image: 'https://hips.hearstapps.com/hmg-prod/images/index-headphones-654d443e68a75.jpg?crop=0.5xw:1xh;center,top&resize=640:*',
      onSale: true
    },
    {
      id: 2,
      name: 'Smart Watch with Fitness Tracker',
      price: '$199.99',
      image: 'https://i.ebayimg.com/images/g/-0UAAOSwaXpk7Z8g/s-l960.webp'
    },
    {
      id: 3,
      name: 'Bluetooth Speaker - Waterproof',
      price: '$89.99',
      originalPrice: '$109.99',
      image: 'https://cdn.mos.cms.futurecdn.net/6973xUBZFtvYeDmTUtuviF-1200-80.jpg',
      onSale: true
    },
    {
      id: 4,
      name: 'Wireless Charging Pad',
      price: '$39.99',
      image: 'https://myhypergear.com/cdn/shop/products/15328_HYG_3_in_1_wireless_charging_dock_002.jpg?v=1605997233'
    },
    {
      id: 5,
      name: 'Wireless Charging Pad',
      price: '$39.99',
      image: 'https://myhypergear.com/cdn/shop/products/15328_HYG_3_in_1_wireless_charging_dock_002.jpg?v=1605997233'
    },
    {
      id: 6,
      name: 'Wireless Charging Pad',
      price: '$39.99',
      image: 'https://myhypergear.com/cdn/shop/products/15328_HYG_3_in_1_wireless_charging_dock_002.jpg?v=1605997233'
    },
  ]);

  const handleAddToCart = (item) => {
    // Add to cart logic here
    console.log('Added to cart:', item);
  };

  const handleRemoveFromWishlist = (id) => {
    setWishlist(wishlist.filter(item => item.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Your Wishlist</h1>
        <div className="flex items-center gap-2">
          <span className="text-gray-600 dark:text-gray-300">
            {wishlist.length} {wishlist.length === 1 ? 'item' : 'items'}
          </span>
        </div>
      </div>

      {wishlist.length === 0 ? (
        <div className="text-center py-12">
          <FiHeart className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-lg font-medium text-gray-900 dark:text-white">Your wishlist is empty</h3>
          <p className="mt-1 text-gray-500 dark:text-gray-400">Start adding items you love!</p>
          <div className="mt-6">
            <Button color="blue" href="/products">
              <FiShoppingBag className="mr-2" />
              Browse Products
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((item) => (
            <Card 
              key={item.id} 
              className="hover:shadow-lg transition-shadow duration-300 group relative overflow-hidden h-full flex flex-col"
              renderImage={() => (
                <div className="relative pt-[100%] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="absolute top-0 left-0 w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      e.target.src = 'https://via.placeholder.com/300x300?text=Product+Image';
                      e.target.className = 'absolute top-0 left-0 w-full h-full object-contain p-4 bg-gray-100';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )}
            >
              <div className="flex flex-col h-full">
                <h5 className="text-lg font-semibold text-gray-900 dark:text-white line-clamp-2 mb-2">
                  {item.name}
                </h5>
                
                <div className="mt-auto">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xl font-bold text-gray-900 dark:text-white">
                      {item.price}
                    </span>
                    {item.originalPrice && (
                      <span className="text-sm line-through text-gray-500 dark:text-gray-400">
                        {item.originalPrice}
                      </span>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      color="blue" 
                      size="sm" 
                      className="flex-1 hover:-translate-y-0.5 transition-transform"
                      onClick={() => handleAddToCart(item)}
                    >
                      Add to Cart
                    </Button>
                    <Button 
                      color="gray" 
                      size="sm" 
                      className="hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      onClick={() => handleRemoveFromWishlist(item.id)}
                    >
                      <FiTrash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
              
              {item.onSale && (
                <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  SALE
                </div>
              )}
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}

export default WishList;