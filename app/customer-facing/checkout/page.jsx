"use client";
import { useState } from 'react';
import { Card, Button, TextInput, Alert, Badge, Label, Select } from "flowbite-react";
import { FiCreditCard, FiTruck, FiLock, FiArrowLeft, FiCheckCircle } from "react-icons/fi";
import Link from "next/link";
import { useProductStore } from '@/lib/zustand';

export default function CheckoutPage() {
  const { products } = useProductStore();
  const cartItems = products.filter((item) => item.isInCart === true);
  
  // Form state
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    apartment: '',
    city: '',
    country: 'Ethiopia',
    state: '',
    zip: '',
    phone: '',
    saveInfo: false,
    shippingMethod: 'standard',
    paymentMethod: 'credit-card',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvv: ''
  });

  const [activeStep, setActiveStep] = useState(1); // 1 = Information, 2 = Shipping, 3 = Payment

  // Calculate order totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = formData.shippingMethod === 'express' ? 14.99 : (subtotal > 500 ? 0 : 29.99);
  const tax = subtotal * 0.08; // Example tax calculation
  const total = subtotal + shipping + tax;

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment and place order logic would go here
    setActiveStep(4); // Show confirmation
  };

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
        <Card className="max-w-md w-full text-center">
          <Alert color="warning">
            <span className="font-medium">Your cart is empty!</span>
          </Alert>
          <Link href="/customer-facing/products">
            <Button className="w-full mt-4 bg-gradient-to-r from-purple-500 to-blue-500">
              Continue Shopping
            </Button>
          </Link>
        </Card>
      </div>
    );
  }

  if (activeStep === 4) {
    return (
      <div className="container mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
        <Card className="max-w-2xl w-full text-center">
          <div className="flex justify-center mb-6">
            <FiCheckCircle className="text-6xl text-green-500" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Order Confirmed!
          </h1>
          <p className="text-gray-600 dark:text-gray-300 mb-6">
            Thank you for your purchase. Your order has been received and is being processed.
            A confirmation email has been sent to <span className="font-semibold">{formData.email}</span>.
          </p>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-6">
            <h2 className="font-semibold mb-2">Order Summary</h2>
            <div className="flex justify-between mb-1">
              <span>Order Total:</span>
              <span className="font-semibold">${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between mb-1">
              <span>Payment Method:</span>
              <span>{formData.paymentMethod === 'credit-card' ? 'Credit Card' : 'PayPal'}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping Method:</span>
              <span>{formData.shippingMethod === 'express' ? 'Express Shipping' : 'Standard Shipping'}</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/customer-facing/order-history">
              <Button className="w-full sm:w-auto">
                View Order History
              </Button>
            </Link>
            <Link href="/customer-facing/products">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-purple-500 to-blue-500">
                Continue Shopping
              </Button>
            </Link>
          </div>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Checkout Header */}
        <div className="mb-8">
          <Link href="/customer-facing/cart" className="flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 mb-4">
            <FiArrowLeft className="mr-2" />
            Back to Cart
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Checkout</h1>
          
          {/* Progress Steps */}
          <div className="flex items-center justify-between mb-6">
            <div className={`flex flex-col items-center ${activeStep >= 1 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeStep >= 1 ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-gray-100 dark:bg-gray-700'}`}>
                {activeStep > 1 ? <FiCheckCircle /> : '1'}
              </div>
              <span className="mt-2 text-sm">Information</span>
            </div>
            
            <div className={`flex-1 h-1 mx-2 ${activeStep >= 2 ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
            
            <div className={`flex flex-col items-center ${activeStep >= 2 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeStep >= 2 ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-gray-100 dark:bg-gray-700'}`}>
                {activeStep > 2 ? <FiCheckCircle /> : '2'}
              </div>
              <span className="mt-2 text-sm">Shipping</span>
            </div>
            
            <div className={`flex-1 h-1 mx-2 ${activeStep >= 3 ? 'bg-blue-500' : 'bg-gray-200 dark:bg-gray-700'}`}></div>
            
            <div className={`flex flex-col items-center ${activeStep >= 3 ? 'text-blue-600 dark:text-blue-400' : 'text-gray-400'}`}>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${activeStep >= 3 ? 'bg-blue-100 dark:bg-blue-900/30' : 'bg-gray-100 dark:bg-gray-700'}`}>
                3
              </div>
              <span className="mt-2 text-sm">Payment</span>
            </div>
          </div>
        </div>

        {/* Main Checkout Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Checkout Form */}
          <div className="lg:w-2/3">
            <Card className="mb-6">
              <form onSubmit={handleSubmit}>
                {/* Step 1: Contact Information */}
                {activeStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Contact Information</h2>
                    
                    <div>
                      <Label htmlFor="email" value="Email address" />
                      <TextInput
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <Label htmlFor="firstName" value="First name" />
                        <TextInput
                          id="firstName"
                          name="firstName"
                          placeholder='first name'
                          type="text"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="flex-1">
                        <Label htmlFor="lastName" value="Last name" />
                        <TextInput
                          id="lastName"
                          name="lastName"
                          type="text"
                          placeholder='last name'
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" value="Phone number" />
                      <TextInput
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+1 (555) 123-4567"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                      <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                        For delivery updates
                      </p>
                    </div>
                    
                    <div className="flex items-center">
                      <input
                        id="saveInfo"
                        name="saveInfo"
                        type="checkbox"
                        checked={formData.saveInfo}
                        onChange={handleChange}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label htmlFor="saveInfo" className="ml-2 block text-sm text-gray-900 dark:text-gray-300">
                        Save this information for next time
                      </label>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button onClick={() => setActiveStep(2)} className="bg-gradient-to-r from-purple-500 to-blue-500">
                        Continue to Shipping
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 2: Shipping Information */}
                {activeStep === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Shipping Address</h2>
                    
                    <div>
                      <Label htmlFor="address" value="Address" />
                      <TextInput
                        id="address"
                        name="address"
                        type="text"
                        placeholder="123 Main St"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="apartment" value="Apartment, suite, etc. (optional)" />
                      <TextInput
                        id="apartment"
                        name="apartment"
                        placeholder='apartment'
                        type="text"
                        value={formData.apartment}
                        onChange={handleChange}
                      />
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <Label htmlFor="city" value="City" />
                        <TextInput
                          id="city"
                          name="city"
                          type="text"
                          placeholder='city'
                          value={formData.city}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="flex-1">
                        <Label htmlFor="country" value="Country" />
                        <Select
                          id="country"
                          name="country"
                          value={formData.country}
                          onChange={handleChange}
                          required
                        >
                          <option>Ethiopia</option>
                          <option>Kenya</option>
                          <option>United States</option>
                          <option>Canada</option>
                          <option>United Kingdom</option>
                          <option>Australia</option>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="flex gap-4">
                      <div className="flex-1">
                        <Label htmlFor="state" value="State/Province" />
                        <TextInput
                          id="state"
                          name="state"
                          type="text"
                          placeholder='state'
                          value={formData.state}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="flex-1">
                        <Label htmlFor="zip" value="ZIP/Postal code" />
                        <TextInput
                          id="zip"
                          name="zip"
                          placeholder='zip'
                          type="text"
                          value={formData.zip}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mt-8">Shipping Method</h3>
                    
                    <div className="space-y-4">
                      <div className={`p-4 border rounded-lg cursor-pointer ${formData.shippingMethod === 'standard' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-200 dark:border-gray-700'}`}
                           onClick={() => setFormData({...formData, shippingMethod: 'standard'})}>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="shippingMethod"
                            checked={formData.shippingMethod === 'standard'}
                            onChange={() => {}}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                          />
                          <div className="ml-3">
                            <span className="block text-sm font-medium text-gray-900 dark:text-white">
                              Standard Shipping
                            </span>
                            <span className="block text-sm text-gray-500 dark:text-gray-400">
                              {subtotal > 500 ? 'FREE' : '$29.99'} • 3-5 business days
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className={`p-4 border rounded-lg cursor-pointer ${formData.shippingMethod === 'express' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-200 dark:border-gray-700'}`}
                           onClick={() => setFormData({...formData, shippingMethod: 'express'})}>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="shippingMethod"
                            checked={formData.shippingMethod === 'express'}
                            onChange={() => {}}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                          />
                          <div className="ml-3">
                            <span className="block text-sm font-medium text-gray-900 dark:text-white">
                              Express Shipping
                            </span>
                            <span className="block text-sm text-gray-500 dark:text-gray-400">
                              $14.99 • 1-2 business days
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between pt-4">
                      <Button color="gray" onClick={() => setActiveStep(1)}>
                        Back
                      </Button>
                      <Button onClick={() => setActiveStep(3)} className="bg-gradient-to-r from-purple-500 to-blue-500">
                        Continue to Payment
                      </Button>
                    </div>
                  </div>
                )}

                {/* Step 3: Payment Information */}
                {activeStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-gray-900 dark:text-white">Payment Method</h2>
                    
                    <div className="space-y-4">
                      <div className={`p-4 border rounded-lg cursor-pointer ${formData.paymentMethod === 'credit-card' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-200 dark:border-gray-700'}`}
                           onClick={() => setFormData({...formData, paymentMethod: 'credit-card'})}>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="paymentMethod"
                            checked={formData.paymentMethod === 'credit-card'}
                            onChange={() => {}}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                          />
                          <div className="ml-3">
                            <span className="block text-sm font-medium text-gray-900 dark:text-white">
                              Credit Card
                            </span>
                            <div className="flex mt-2 space-x-2">
                              <img src="https://logowik.com/content/uploads/images/219_visa.jpg" className="h-6" alt="Visa" />
                              <img src="https://www.investopedia.com/thmb/F8CKM3YkF1fmnRCU2g4knuK0eDY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/MClogo-c823e495c5cf455c89ddfb0e17fc7978.jpg" className="h-6" alt="Mastercard" />
                              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg" className="h-6" alt="Apple Pay" />
                            </div>
                          </div>
                        </div>
                        
                        {formData.paymentMethod === 'credit-card' && (
                          <div className="mt-4 space-y-4 pl-7">
                            <div>
                              <Label htmlFor="cardNumber" value="Card number" />
                              <TextInput
                                id="cardNumber"
                                name="cardNumber"
                                type="text"
                                placeholder="1234 5678 9012 3456"
                                value={formData.cardNumber}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            
                            <div>
                              <Label htmlFor="cardName" value="Name on card" />
                              <TextInput
                                id="cardName"
                                name="cardName"
                                type="text"
                                placeholder="John Smith"
                                value={formData.cardName}
                                onChange={handleChange}
                                required
                              />
                            </div>
                            
                            <div className="flex gap-4">
                              <div className="flex-1">
                                <Label htmlFor="cardExpiry" value="Expiration date (MM/YY)" />
                                <TextInput
                                  id="cardExpiry"
                                  name="cardExpiry"
                                  type="text"
                                  placeholder="MM/YY"
                                  value={formData.cardExpiry}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                              <div className="flex-1">
                                <Label htmlFor="cardCvv" value="CVV" />
                                <TextInput
                                  id="cardCvv"
                                  name="cardCvv"
                                  type="text"
                                  placeholder="123"
                                  value={formData.cardCvv}
                                  onChange={handleChange}
                                  required
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className={`p-4 border rounded-lg cursor-pointer ${formData.paymentMethod === 'paypal' ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-200 dark:border-gray-700'}`}
                           onClick={() => setFormData({...formData, paymentMethod: 'paypal'})}>
                        <div className="flex items-center">
                          <input
                            type="radio"
                            name="paymentMethod"
                            checked={formData.paymentMethod === 'paypal'}
                            onChange={() => {}}
                            className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                          />
                          <div className="ml-3">
                            <span className="block text-sm font-medium text-gray-900 dark:text-white">
                              PayPal
                            </span>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0ehyPkJvvT6UQTvQkjr7-nQE2Gk3glYrIUg&s" className="h-6 mt-2" alt="PayPal" />
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                      <FiLock className="mr-2" />
                      Your transaction is secured with SSL encryption
                    </div>
                    
                    <div className="flex justify-between pt-4">
                      <Button color="gray" onClick={() => setActiveStep(2)}>
                        Back
                      </Button>
                      <Button type="submit" className="bg-gradient-to-r from-purple-500 to-blue-500">
                        Complete Order
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </Card>
          </div>

          {/* Order Summary */}
          <div className="lg:w-1/3">
            <Card className="sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Order Summary</h2>
              
              <div className="space-y-4">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between items-start">
                    <div className="flex items-center">
                      <img
                        src={item.images[0]}
                        alt={item.name}
                        className="w-12 h-12 object-contain rounded mr-3"
                      />
                      <div>
                        <h3 className="text-sm font-medium text-gray-900 dark:text-white">{item.name}</h3>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Qty: {item.quantity}</p>
                      </div>
                    </div>
                    <span className="text-sm font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>
              
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Subtotal</span>
                  <span className="font-medium">${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Shipping</span>
                  <span className="font-medium">
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600 dark:text-gray-300">Tax</span>
                  <span className="font-medium">${tax.toFixed(2)}</span>
                </div>
                
                <div className="border-t border-gray-200 dark:border-gray-700 pt-3 flex justify-between font-bold text-lg">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}