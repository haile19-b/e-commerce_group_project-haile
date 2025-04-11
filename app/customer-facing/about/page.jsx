import React from 'react';
import { FaLeaf, FaAward, FaUsers, FaShippingFast, FaHandHoldingHeart } from 'react-icons/fa';
import { Button } from 'flowbite-react';

function AboutPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">Our Story</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          From humble beginnings to becoming your favorite shopping destination - this is who we are and what we stand for.
        </p>
      </section>

      {/* About Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Who We Are</h2>
          <p className="text-gray-600 mb-4">
            Founded in 2015, our e-commerce platform began as a small family business with a passion for delivering quality products to our community.
          </p>
          <p className="text-gray-600 mb-4">
            Today, we've grown into a trusted online marketplace serving customers nationwide, but we've never lost sight of our core values.
          </p>
          <p className="text-gray-600 mb-6">
            Our team of dedicated professionals works tirelessly to ensure you have the best shopping experience possible.
          </p>
          <Button color="dark" className="px-8">
            Meet Our Team
          </Button>
        </div>
        <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center">
          <p className="text-gray-500">Team photo or illustration</p>
        </div>
      </section>

      {/* Values Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Values</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="bg-green-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <FaLeaf className="text-green-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Sustainability</h3>
            <p className="text-gray-600">
              We're committed to eco-friendly practices and sustainable sourcing to protect our planet.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="bg-blue-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <FaAward className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Quality</h3>
            <p className="text-gray-600">
              Every product in our catalog meets our rigorous standards for quality and durability.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm text-center">
            <div className="bg-purple-100 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
              <FaUsers className="text-purple-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Customer First</h3>
            <p className="text-gray-600">
              Your satisfaction is our top priority. We listen and adapt to serve you better.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-50 py-12 rounded-xl mb-20">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">By The Numbers</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <p className="text-5xl font-bold text-blue-600 mb-2">10K+</p>
            <p className="text-gray-600">Happy Customers</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-green-600 mb-2">500+</p>
            <p className="text-gray-600">Quality Products</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-yellow-600 mb-2">24/7</p>
            <p className="text-gray-600">Customer Support</p>
          </div>
          <div>
            <p className="text-5xl font-bold text-purple-600 mb-2">5</p>
            <p className="text-gray-600">Years in Business</p>
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center">
          <p className="text-gray-500">Illustration or photo</p>
        </div>
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Commitment</h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="bg-red-100 p-3 rounded-full">
                <FaShippingFast className="text-red-600 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Fast Shipping</h3>
                <p className="text-gray-600">
                  We process and ship orders within 24 hours to get your products to you quickly.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <FaHandHoldingHeart className="text-blue-600 text-xl" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">Easy Returns</h3>
                <p className="text-gray-600">
                  Not satisfied? Our 30-day return policy makes it easy to exchange or return items.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutPage;