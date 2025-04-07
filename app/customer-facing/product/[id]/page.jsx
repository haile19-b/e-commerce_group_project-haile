"use client"
import React, { useState } from 'react';
import { Card, Button, Spinner } from "flowbite-react";
import { FiShoppingCart, FiHeart, FiShare2, FiChevronLeft, FiChevronRight } from "react-icons/fi";

function page() {
  const [selectedColor, setSelectedColor] = useState('Starlight');
  const [selectedSize, setSelectedSize] = useState('41mm');
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isAddingToCart, setIsAddingToCart] = useState(false);

  const product = {
    id: 'aw-series7',
    name: 'Apple Watch Series 7 GPS',
    description: 'Aluminium Case, Starlight Sport Band',
    price: 599,
    originalPrice: 699,
    images: [
      'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/watch-card-40-se-202503_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1739545405902',
      'https://sekyo.in/cdn/shop/files/Magic_pro_3.jpg?v=1742879539',
      'https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MXL53_FV98_VW_34FR+watch-case-44-aluminum-silver-nc-se_VW_34FR+watch-face-44-aluminum-silver-se_VW_34FR?wid=750&hei=712&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1725647080396',
      'https://m.media-amazon.com/images/I/71YhTRvNj5L._AC_UF1000,1000_QL80_.jpg'
    ],
    colors: ['Starlight', 'Midnight', 'Blue', 'Product Red'],
    sizes: ['41mm', '45mm'],
    features: [
      'Always-On Retina display - Now brighter indoors without raising your wrist',
      'Blood oxygen sensor - Measure your blood oxygen with a revolutionary sensor and app',
      'ECG app - Take an electrocardiogram anytime, anywhere',
      'High and low heart rate notifications - Get notified if your heart rate is above or below your specified threshold',
      'Water resistant 50 meters - Swimproof design'
    ],
    rating: 4,
    reviewCount: 142
  };

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    setTimeout(() => {
      setIsAddingToCart(false);
      // Add your cart logic here
    }, 1000);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Product Gallery */}
        <div className="md:w-1/2">
          <div className="relative rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 aspect-square">
            <img
              src={product.images[currentImage]}
              alt={product.name}
              className="w-full h-full object-contain p-8 transition-opacity duration-300"
            />
            <button 
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-700/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-600 transition-all"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-700/80 p-2 rounded-full shadow-md hover:bg-white dark:hover:bg-gray-600 transition-all"
            >
              <FiChevronRight className="w-5 h-5" />
            </button>
          </div>
          
          <div className="grid grid-cols-4 gap-3 mt-4">
            {product.images.map((img, index) => (
              <button
                key={index}
                onClick={() => setCurrentImage(index)}
                className={`rounded-lg overflow-hidden border-2 ${currentImage === index ? 'border-blue-500' : 'border-transparent'} hover:border-gray-300 transition-all`}
              >
                <img
                  src={img}
                  alt={`${product.name} Variant ${index + 1}`}
                  className="w-full h-20 object-contain bg-gray-100 dark:bg-gray-700"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {product.name}, {product.description}
          </h1>
          
          <div className="flex items-center mb-4">
            <div className="flex items-center">
              {[1, 2, 3, 4, 5].map((star) => (
                <svg
                  key={star}
                  className={`w-5 h-5 ${star <= product.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
              <span className="ml-2 text-sm font-medium text-gray-500 dark:text-gray-400">
                {product.reviewCount} reviews
              </span>
            </div>
          </div>

          <div className="mb-6">
            <span className="text-4xl font-bold text-gray-900 dark:text-white">${product.price}</span>
            <span className="ml-2 text-lg line-through text-gray-500 dark:text-gray-400">${product.originalPrice}</span>
            <span className="ml-2 text-lg font-semibold text-green-600 dark:text-green-400">
              Save ${product.originalPrice - product.price}
            </span>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Colors</h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={() => setSelectedColor(color)}
                  className={`px-4 py-2 rounded-full border ${selectedColor === color ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30' : 'border-gray-300'} hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors`}
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Size</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-lg border ${selectedSize === size ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/30' : 'border-gray-300'} hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">Quantity</h3>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                -
              </button>
              <span className="text-xl font-medium">{quantity}</span>
              <button 
                onClick={() => setQuantity(q => q + 1)}
                className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                +
              </button>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 mb-6">
            <Button
              color="blue"
              size="lg"
              className="flex-1 min-w-[200px]"
              onClick={handleAddToCart}
              disabled={isAddingToCart}
            >
              {isAddingToCart ? (
                <>
                  <Spinner size="sm" className="mr-2" />
                  Adding...
                </>
              ) : (
                <>
                  <FiShoppingCart className="mr-2" />
                  Add to Cart
                </>
              )}
            </Button>
            <Button
              color="green"
              size="lg"
              className="flex-1 min-w-[200px]"
            >
              Buy Now
            </Button>
          </div>

          <div className="flex gap-3">
            <button 
              onClick={() => setIsWishlisted(!isWishlisted)}
              className={`p-3 rounded-full ${isWishlisted ? 'text-red-500 bg-red-50 dark:bg-red-900/20' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'} transition-colors`}
            >
              <FiHeart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
            </button>
            <button className="p-3 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <FiShare2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Product Description */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Product Details</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            The Apple Watch Series 7 features a larger, more advanced display, faster charging, and the most durable Apple Watch glass yet. The larger display provides more room for your content while barely increasing the size of the watch.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
            {product.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default page;