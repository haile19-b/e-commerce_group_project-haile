import React from 'react';
import { FiShoppingBag, FiSearch, FiUser, FiHeart, FiMenu, FiChevronRight } from 'react-icons/fi';
import { FaStar, FaRegStar, FaStarHalfAlt } from 'react-icons/fa';
import { IoFlashOutline } from 'react-icons/io5';
import Link from 'next/link';

export default function Home() {
  // Sample data
  const categories = [
    { name: 'Electronics', icon: '📱', count: 120 },
    { name: 'Fashion', icon: '👕', count: 85 },
    { name: 'Home & Garden', icon: '🏠', count: 64 },
    { name: 'Beauty', icon: '💄', count: 42 },
    { name: 'Sports', icon: '⚽', count: 38 },
  ];

  const featuredProducts = [
    { id: 1, name: 'Wireless Headphones', price: 129.99, originalPrice: 159.99, rating: 4.5, reviews: 124, image: 'https://m.media-amazon.com/images/I/61CGHv6kmWL._AC_UF1000,1000_QL80_.jpg' },
    { id: 2, name: 'Smart Watch Pro', price: 199.99, rating: 4.8, reviews: 89, image: 'https://m.media-amazon.com/images/I/61ksrJ2LsgL._AC_UF894,1000_QL80_.jpg' },
    { id: 3, name: 'Bluetooth Speaker', price: 89.99, originalPrice: 109.99, rating: 4.2, reviews: 56, image: 'https://i5.walmartimages.com/seo/Sony-EXTRA-BASS-Portable-Bluetooth-Speaker-Black-SRSXB13B_76b61f0c-075c-4620-bb4c-9bd04f721ac1.2526a4e32274861d6fb12729408f7b3c.jpeg' },
    { id: 4, name: 'Wireless Charger', price: 39.99, rating: 4.0, reviews: 32, image: 'https://myhypergear.com/cdn/shop/products/15515_HYG_3-in-1_MFi_Wireless_Charging_Stand_BLACK_001.jpg?v=1640195095' },
  ];

  const deals = [
    { id: 1, name: 'Summer Sale', discount: 'Up to 50% OFF', image: 'https://t4.ftcdn.net/jpg/03/32/95/71/360_F_332957101_NV588R5pQUyusBU22Wvzqqhq3E7pOPwb.jpg'},
    { id: 2, name: 'New Arrivals', discount: '30% OFF', image: 'https://media.istockphoto.com/id/1366258243/vector/vector-illustration-new-arrival-label-modern-web-banner-on-yellow-background.jpg?s=612x612&w=0&k=20&c=ddLMrtth5QRoW-jJe8_ozTWmvRejIFlq3cv4BAIq_HQ=' },
    { id: 3, name: 'Tech Week', discount: 'Flash Deals', image: 'https://ga-core.s3.amazonaws.com/production/uploads/program/default_image/15482/2-TechWeek_Class_Art.jpg' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Hero Section */}
      <div className="relative bg-indigo-700">
        <div className="absolute inset-0">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
            alt=""
          />
          <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" aria-hidden="true" />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Welcome to Yegna Gebia
          </h1>
          <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
            Discover amazing products at unbeatable prices. Quality you can trust, service you can rely on.
          </p>
          <div className="mt-10">
            <Link href={'/signUp'}>
            <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Start Shopping
            </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Shop by Category</h2>
          <a href="#" className="text-indigo-600 hover:text-indigo-500 flex items-center">
            View all <FiChevronRight className="ml-1" />
          </a>
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {categories.map((category) => (
            <a
              key={category.name}
              href="#"
              className="group bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow duration-200"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-200">
                {category.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900">{category.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{category.count} items</p>
            </a>
          ))}
        </div>
      </div>

      {/* Flash Deals */}
      <div className="bg-indigo-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-8">
            <IoFlashOutline className="h-8 w-8 text-indigo-600 mr-2" />
            <h2 className="text-2xl font-bold text-gray-900">Flash Deals</h2>
            <div className="ml-auto bg-indigo-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              Ends in 12:34:56
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {deals.map((deal) => (
              <div key={deal.id} className="relative rounded-lg overflow-hidden group">
                <img
                  src={deal.image}
                  alt={deal.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent flex flex-col justify-end p-6">
                  <h3 className="text-xl font-bold text-white">{deal.name}</h3>
                  <p className="text-indigo-200 font-medium">{deal.discount}</p>
                  <button className="mt-3 w-full bg-white text-indigo-600 py-2 rounded-md font-medium hover:bg-indigo-50 transition-colors">
                    Shop Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Featured Products</h2>
          <a href="#" className="text-indigo-600 hover:text-indigo-500 flex items-center">
            View all <FiChevronRight className="ml-1" />
          </a>
        </div>
        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <div key={product.id} className="group relative bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-lg bg-gray-200">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover object-center group-hover:opacity-75 transition-opacity duration-200"
                />
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-sm font-medium text-gray-900">
                    <a href="#">
                      <span aria-hidden="true" className="absolute inset-0" />
                      {product.name}
                    </a>
                  </h3>
                  <div className="flex items-center">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star}>
                        {star <= Math.floor(product.rating) ? (
                          <FaStar className="h-4 w-4 text-yellow-400" />
                        ) : star === Math.ceil(product.rating) && product.rating % 1 > 0 ? (
                          <FaStarHalfAlt className="h-4 w-4 text-yellow-400" />
                        ) : (
                          <FaRegStar className="h-4 w-4 text-yellow-400" />
                        )}
                      </span>
                    ))}
                    <span className="ml-1 text-xs text-gray-500">({product.reviews})</span>
                  </div>
                </div>
                <div className="mt-2">
                  {product.originalPrice ? (
                    <div className="flex items-center">
                      <p className="text-lg font-semibold text-gray-900">${product.price.toFixed(2)}</p>
                      <p className="ml-2 text-sm text-gray-500 line-through">${product.originalPrice.toFixed(2)}</p>
                      <span className="ml-2 bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">
                        {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                      </span>
                    </div>
                  ) : (
                    <p className="text-lg font-semibold text-gray-900">${product.price.toFixed(2)}</p>
                  )}
                </div>
                <div className="mt-4 flex space-x-2">
                  <button className="flex-1 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors">
                    Add to Cart
                  </button>
                  <button className="p-2 rounded-md border border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors">
                    <FiHeart className="h-5 w-5 text-gray-400 hover:text-red-500" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter */}
      <div className="bg-indigo-700">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center">
          <div className="lg:w-0 lg:flex-1">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              Sign up for our newsletter
            </h2>
            <p className="mt-3 max-w-3xl text-lg leading-6 text-indigo-200">
              Stay updated with our latest products and exclusive offers.
            </p>
          </div>
          <div className="mt-8 lg:mt-0 lg:ml-8">
            <form className="sm:flex">
              <label htmlFor="email-address" className="sr-only">Email address</label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 focus:outline-none sm:max-w-xs rounded-md"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Subscribe
                </button>
              </div>
            </form>
            <p className="mt-3 text-sm text-indigo-200">
              We care about your data. Read our{' '}
              <a href="#" className="text-white font-medium underline">
                Privacy Policy
              </a>.
            </p>
          </div>
        </div>
      </div>
      
    </div>
  );
}