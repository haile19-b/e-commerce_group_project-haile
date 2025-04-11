"use client";
import React, { useState, useEffect } from 'react';
import { Card, Button, Spinner } from "flowbite-react";
import { FiShoppingCart, FiHeart, FiShare2, FiChevronLeft, FiChevronRight, FiCheck } from "react-icons/fi";
import { useProductStore } from '@/lib/zustand';
import { useParams, useRouter } from 'next/navigation';

export default function ProductDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { products, toggleCart, toggleSave } = useProductStore();
  
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the product with matching ID
    const foundProduct = products.find(p => p.id === id);
    
    if (foundProduct) {
      setProduct(foundProduct);
      setSelectedColor(foundProduct.colors?.[0] || '');
      setSelectedSize(foundProduct.sizes?.[0] || '');
      setLoading(false);
    } else {
      // Redirect to 404 or products page if product not found
      router.push('/customer-facing/products');
    }
  }, [id, products, router]);

  const handleAddToCart = () => {
    setIsAddingToCart(true);
    toggleCart(id);
    setTimeout(() => {
      setIsAddingToCart(false);
    }, 1000);
  };

  const handleToggleWishlist = (id) => {
    toggleSave(id);
  };

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  if (loading || !product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex justify-center">
        <Spinner size="xl" />
      </div>
    );
  }

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
            {product.originalPrice && (
              <>
                <span className="ml-2 text-lg line-through text-gray-500 dark:text-gray-400">${product.originalPrice}</span>
                <span className="ml-2 text-lg font-semibold text-green-600 dark:text-green-400">
                  Save ${product.originalPrice - product.price}
                </span>
              </>
            )}
          </div>

          {product.colors && product.colors.length > 0 && (
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
          )}

          {product.sizes && product.sizes.length > 0 && (
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
          )}

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
              color={product.isInCart ? "green" : "blue"}
              size="lg"
              className="flex-1 min-w-[200px]"
              onClick={handleAddToCart}
              disabled={isAddingToCart}
            >
              {isAddingToCart ? (
                <>
                  <Spinner size="sm" className="mr-2" />
                  {product.isInCart ? 'Updating...' : 'Adding...'}
                </>
              ) : product.isInCart ? (
                <>
                  <FiCheck className="mr-2" />
                  Added to Cart
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
              onClick={()=>{handleToggleWishlist(product.id)}}
              className={`p-3 rounded-full ${product.isSaved ? 'text-red-500 bg-red-50 dark:bg-red-900/20' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'} transition-colors`}
            >
              <FiHeart className={`w-5 h-5 ${product.isSaved ? 'fill-current' : ''}`} />
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
            {product.description}
          </p>
          {product.features && product.features.length > 0 && (
            <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
              {product.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}