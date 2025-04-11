"use client";
import { useState } from 'react';
import { Card, Button, TextInput, Alert, Badge } from "flowbite-react";
import { FiShoppingCart, FiTrash2, FiArrowLeft, FiPlus, FiMinus, FiTag } from "react-icons/fi";
import Link from "next/link";
import { useProductStore } from '@/lib/zustand';

export default function MyCart() {
  // State for cart items with full functionality
  const {products,updateProduct} = useProductStore();

  const cartItems = products.filter((item) => item.isInCart === true);

  // Calculate cart totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const discount = cartItems.reduce((sum, item) => sum + ((item.originalPrice - item.price) * item.quantity), 0);
  const shipping = subtotal > 500 ? 0 : 29.99;
  const total = subtotal + shipping;

  // Cart manipulation functions
  const updateQuantity = (id, action) => {
    const product = products.find((item) => item.id === id);
    if (action === '+') {
      updateProduct(id, { quantity: product.quantity + 1 });
    } else if (action === '-') {
      if (product.quantity > 1) {
        updateProduct(id, { quantity: product.quantity - 1 });
      } else {
        updateProduct(id, { isInCart: false });
      }
    } else {
      updateProduct(id, { quantity: action });
    }
  };

  const removeItem = (id) => {
    updateProduct(id, { isInCart: false });
  };

  const applyCoupon = () => {
    // Coupon logic would go here
    alert("Coupon applied! (This is a demo)");
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div className="flex items-center">
            <FiShoppingCart className="text-2xl mr-3 text-blue-600 dark:text-blue-400" />
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
              My Shopping Cart
              <Badge color="blue" className="ml-3">
                {cartItems.reduce((total, item) => total + item.quantity, 0)} items
              </Badge>
            </h1>
          </div>
          <Link href="/customer-facing/products">
            <Button className="flex items-center bg-gradient-to-r from-purple-500 to-blue-500">
              <FiArrowLeft className="mr-2" />
              Continue Shopping
            </Button>
          </Link>
        </div>

        {/* Main Cart Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items Section */}
          <div className="lg:w-2/3 space-y-4">
            {cartItems.length === 0 ? (
              <Alert color="info" className="mb-6">
                <span className="font-medium">Your cart is empty!</span> Start shopping to add items.
              </Alert>
            ) : (
              <>
                {/* Desktop Headers */}
                <div className="hidden md:grid grid-cols-12 gap-4 p-4 bg-white dark:bg-gray-800 rounded-lg shadow">
                  <div className="col-span-5 font-medium">Product</div>
                  <div className="col-span-2 font-medium">Price</div>
                  <div className="col-span-3 font-medium">Quantity</div>
                  <div className="col-span-2 font-medium text-right">Total</div>
                </div>

                {/* Cart Items */}
                {cartItems.map((item) => (
                  <Card key={item.id} className="hover:shadow-lg transition-shadow">
                    <div className="grid grid-cols-12 gap-4 items-center">
                      {/* Product Image & Info */}
                      <div className="col-span-12 md:col-span-5 flex items-start space-x-4">
                        <img
                          src={item.images[0]}
                          alt={item.name}
                          className="w-24 h-24 object-contain rounded-lg"
                        />
                        <div>
                          <h3 className="font-semibold text-lg text-gray-900 dark:text-white">
                            {item.name}
                          </h3>
                          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                            {item.description}
                          </p>
                          {item.originalPrice > item.price && (
                            <Badge color="green" className="mt-2 w-fit">
                              Save ${(item.originalPrice - item.price).toFixed(2)}
                            </Badge>
                          )}
                          <button 
                            onClick={() => removeItem(item.id)}
                            className="text-red-500 text-sm flex items-center mt-3 hover:text-red-700 dark:hover:text-red-400"
                          >
                            <FiTrash2 className="mr-1" /> Remove
                          </button>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="col-span-4 md:col-span-2">
                        <div className="flex flex-col">
                          <span className="font-semibold text-gray-900 dark:text-white">
                            ${item.price.toFixed(2)}
                          </span>
                          {item.originalPrice > item.price && (
                            <span className="text-sm text-gray-500 dark:text-gray-400 line-through">
                              ${item.originalPrice.toFixed(2)}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Quantity */}
                      <div className="col-span-4 md:col-span-3">
                        <div className="flex items-center border rounded-lg w-fit divide-x divide-gray-200 dark:divide-gray-700">
                          <button 
                            className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => updateQuantity(item.id,'-')}
                          >
                            <FiMinus />
                          </button>
                          <TextInput
                            type="number"
                            value={item.quantity}
                            onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                            min="1"
                            className="w-12 text-center [&>input]:text-center border-0"
                          />
                          <button 
                            className="px-3 py-2 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                            onClick={() => updateQuantity(item.id,'+')}
                          >
                            <FiPlus />
                          </button>
                        </div>
                      </div>

                      {/* Total */}
                      <div className="col-span-4 md:col-span-2 text-right">
                        <span className="font-semibold text-gray-900 dark:text-white">
                          ${(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </Card>
                ))}
              </>
            )}
          </div>

          {/* Order Summary Section */}
          <div className="lg:w-1/3">
            <Card className="sticky top-8 shadow-lg">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-6 pb-2 border-b">
                Order Summary
              </h2>
              
              {/* Coupon Code */}
              <div className="mb-6">
                <label htmlFor="coupon" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Have a coupon?
                </label>
                <div className="flex gap-2">
                  <TextInput 
                    id="coupon" 
                    placeholder="Enter coupon code" 
                    className="flex-1" 
                  />
                  <Button color="gray" onClick={applyCoupon}>
                    <FiTag className="mr-2" />
                    Apply
                  </Button>
                </div>
              </div>

              {/* Pricing Breakdown */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between text-green-600 dark:text-green-400">
                  <span>Discount</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? (
                      <span className="text-green-600 dark:text-green-400">FREE</span>
                    ) : (
                      `$${shipping.toFixed(2)}`
                    )}
                  </span>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-3 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Button 
                className="w-full mb-4 py-3 text-lg bg-gradient-to-r from-purple-500 to-blue-500"
                disabled={cartItems.length === 0}
              >
                Proceed to Checkout
              </Button>

              {cartItems.length > 0 && (
                <div className="text-center">
                  <Link href="#" className="text-sm text-blue-600 hover:underline dark:text-blue-400">
                    Continue shopping
                  </Link>
                </div>
              )}

              {/* Shipping Info */}
              {cartItems.length > 0 && (
                <div className="mt-6 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                  <p className="text-sm text-blue-700 dark:text-blue-300">
                    {subtotal < 500 ? (
                      <>
                        <span className="font-semibold">Spend ${(500 - subtotal).toFixed(2)} more</span> to get free shipping!
                      </>
                    ) : (
                      <span className="font-semibold">🎉 Congratulations! You've got free shipping!</span>
                    )}
                  </p>
                </div>
              )}
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}