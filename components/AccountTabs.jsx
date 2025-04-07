"use client";
import { useState } from 'react';
import { Card, Button } from 'flowbite-react';
import { FiShoppingBag, FiHeart } from 'react-icons/fi';

export default function AccountTabs() {
  const [activeTab, setActiveTab] = useState('orders');

  const orders = [
    {
      id: '#EC-7845',
      date: 'May 15, 2023',
      status: 'Delivered',
      total: '$189.99',
      items: 3
    },
    {
      id: '#EC-7846',
      date: 'May 15, 2023',
      status: 'Delivered',
      total: '$189.99',
      items: 3
    },
    {
      id: '#EC-7847',
      date: 'May 15, 2023',
      status: 'Delivered',
      total: '$189.99',
      items: 3
    },
    // ... other orders
  ];

  const wishlist = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: '$129.99',
      image: 'https://hips.hearstapps.com/hmg-prod/images/index-headphones-654d443e68a75.jpg?crop=0.5xw:1xh;center,top&resize=640:*'
    },
    {
      id: 2,
      name: 'Wireless Headphones',
      price: '$129.99',
      image: 'https://hips.hearstapps.com/hmg-prod/images/index-headphones-654d443e68a75.jpg?crop=0.5xw:1xh;center,top&resize=640:*'
    },
    {
      id: 3,
      name: 'Wireless Headphones',
      price: '$129.99',
      image: 'https://hips.hearstapps.com/hmg-prod/images/index-headphones-654d443e68a75.jpg?crop=0.5xw:1xh;center,top&resize=640:*'
    },
    // ... other wishlist items
  ];

  const renderTabContent = () => {
    switch(activeTab) {
      case 'orders':
        return (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">Order ID</th>
                  <th scope="col" className="px-6 py-3">Date</th>
                  <th scope="col" className="px-6 py-3">Items</th>
                  <th scope="col" className="px-6 py-3">Total</th>
                  <th scope="col" className="px-6 py-3">Status</th>
                  <th scope="col" className="px-6 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="px-6 py-4 font-medium text-gray-900 dark:text-white">
                      {order.id}
                    </td>
                    <td className="px-6 py-4">{order.date}</td>
                    <td className="px-6 py-4">{order.items} item{order.items > 1 ? 's' : ''}</td>
                    <td className="px-6 py-4">{order.total}</td>
                    <td className="px-6 py-4">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        order.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                        order.status === 'Shipped' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {order.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 space-x-2">
                      <Button size="xs" color="light">View</Button>
                      <Button size="xs" color="light">Track</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      case 'wishlist':
        return (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {wishlist.map((item) => (
              <Card 
                key={item.id} 
                className="hover:shadow-lg transition-shadow duration-300 group relative overflow-hidden"
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
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </Button>
                    </div>
                  </div>
                </div>
                
                {/* Sale badge example */}
                {item.onSale && (
                  <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                    SALE
                  </div>
                )}
              </Card>
            ))}
          </div>
        );
      default:
        return <div>Select a tab</div>;
    }
  };

  return (
    <div>
      {/* Tab Navigation */}
      <div className="border-b border-gray-200 dark:border-gray-700 mb-6">
        <nav className="flex space-x-8">
          <button
            onClick={() => setActiveTab('orders')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'orders'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <FiShoppingBag className="inline mr-2" /> My Orders
          </button>
          <button
            onClick={() => setActiveTab('wishlist')}
            className={`py-4 px-1 border-b-2 font-medium text-sm ${
              activeTab === 'wishlist'
                ? 'border-blue-500 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            <FiHeart className="inline mr-2" /> Wishlist
          </button>
        </nav>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
}