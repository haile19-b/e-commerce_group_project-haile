'use client';
import React, { useState } from 'react';
import { Card, Button, Badge } from 'flowbite-react';
import Link from 'next/link';
import { useProductStore } from '@/lib/zustand';
import { FiHeart, FiShoppingCart, FiEye } from 'react-icons/fi';
import { FaHeart } from "react-icons/fa";

export default function ProductList() {
  const { products,updateProduct } = useProductStore();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 8;
  const [hoveredProduct, setHoveredProduct] = useState(null);

  // Calculate pagination
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(products.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handleSavedStatus = (productId) => {
    const product = products.find((item) => item.id === productId);
    updateProduct(productId, { isSaved: !product.isSaved });
  }

  const handleAddToCart = (productId) => {
    const product = products.find((item) => item.id === productId);
    updateProduct(productId, { isInCart: !product.isInCart });
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">Featured Products</h2>
      
      {products.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">No products available</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {currentProducts.map((product) => (
              <div 
                key={product.id}
                className="group relative"
                onMouseEnter={() => setHoveredProduct(product.id)}
                onMouseLeave={() => setHoveredProduct(null)}
              >
                {/* Sale Badge */}
                {product.originalPrice && (
                  <Badge color="red" className="absolute top-2 left-2 z-10">
                    {Math.round((1 - product.price/product.originalPrice) * 100)}% OFF
                  </Badge>
                )}

                <Link href={`/customer-facing/product/${product.id}`}>
                  <Card
                    className="h-full flex flex-col transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-200 dark:border-gray-700"
                    renderImage={() => (
                      <div className="relative h-60 w-full overflow-hidden bg-white flex items-center justify-center p-4">
                        <img
                          src={product.images?.[0] || product.image || '/default-product-image.jpg'}
                          alt={product.name}
                          className={`h-full w-full object-contain transition-transform duration-500 ${hoveredProduct === product.id ? 'scale-110' : 'scale-100'}`}
                        />
                      </div>
                    )}
                  >
                    <div className="flex-grow">
                      <h5 className="text-md font-semibold tracking-tight text-gray-900 dark:text-white line-clamp-2">
                        {product.name}
                      </h5>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mt-1 line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                    
                    <div className="mb-2 mt-2 flex items-center">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <svg
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                      <span className="ml-2 text-xs font-semibold text-gray-600 dark:text-gray-300">
                        ({product.reviewCount || 0})
                      </span>
                    </div>
                    
                    <div className="flex items-center justify-between mt-auto">
                      <div className='flex flex-col'>
                        <span className="text-lg font-bold text-gray-900 dark:text-white">
                          ${product.price.toFixed(2)}
                        </span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                            ${product.originalPrice.toFixed(2)}
                          </span>
                        )}
                      </div>
                    </div>
                  </Card>
                </Link>

                {/* Quick Action Buttons */}
                <div className={`absolute bottom-16 left-0 right-0 flex justify-center space-x-2 transition-all duration-300 ${hoveredProduct === product.id ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                {/* Heart/Save Button */}
                <button 
                  className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSavedStatus(product.id);
                  }}
                > 
                  {product.isSaved ? (
                    <FaHeart className="text-red-500" />
                  ) : (
                    <FiHeart className="text-gray-700" />
                  )}
                </button>
                
                {/* Add to Cart/Added Button */}
                <button 
                  className={`p-2 rounded-full shadow-md transition-colors ${product.isInCart ? 'bg-green-500 text-white' : 'bg-amber-600 text-white hover:bg-amber-700'}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleAddToCart(product.id);
                  }}
                >
                  {product.isInCart ? (
                    <span className="text-xs px-1">Added</span>
                  ) : (
                    <FiShoppingCart />
                  )}
                </button>
              </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12 space-x-2">
              <Button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                color="light"
                size="md"
                className="px-4 py-2 border border-gray-300"
              >
                Previous
              </Button>
              
              {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                let pageNum;
                if (totalPages <= 5) {
                  pageNum = i + 1;
                } else if (currentPage <= 3) {
                  pageNum = i + 1;
                } else if (currentPage >= totalPages - 2) {
                  pageNum = totalPages - 4 + i;
                } else {
                  pageNum = currentPage - 2 + i;
                }
                
                return (
                  <Button
                    key={pageNum}
                    onClick={() => paginate(pageNum)}
                    color={currentPage === pageNum ? 'blue' : 'light'}
                    size="md"
                    className={`px-4 py-2 ${currentPage === pageNum ? '' : 'border border-gray-300'}`}
                  >
                    {pageNum}
                  </Button>
                );
              })}
              
              <Button
                onClick={() => paginate(currentPage + 1)}
                disabled={currentPage === totalPages}
                color="light"
                size="md"
                className="px-4 py-2 border border-gray-300"
              >
                Next
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  );
}