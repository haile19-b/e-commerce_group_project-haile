'use client';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from 'next/link';

export default function FeaturedProducts() {
  // Product data
  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 599,
      originalPrice: 699,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 599,
      originalPrice: 699,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Bluetooth Speaker",
      price: 599,
      originalPrice: 699,
      image: "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&auto=format&fit=crop"
    },
    {
      id: 4,
      name: "Gaming Keyboard",
      price: 599,
      originalPrice: 699,
      image: "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=500&auto=format&fit=crop"
    },
    {
      id: 5,
      name: "Wireless Mouse",
      price: 599,
      originalPrice: 699,
      image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&auto=format&fit=crop"
    },
    {
      id: 6,
      name: "External SSD",
      price: 599,
      originalPrice: 699,
      image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=500&auto=format&fit=crop"
    }
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
      
      <Carousel
        opts={{
          align: "start",
          slidesToScroll: "auto",
        }}
        className="w-full relative group"
      >
        <CarouselContent className="-ml-2">
          {products.map((product) => (
            <CarouselItem 
              key={product.id} 
              className="pl-2 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
            >
              <Link href={'/customer-facing/product/3'} >
              <div className="p-2">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <div className='flex justify-center items-center flex-col gap-2'>
                      <div className='flex gap-3 items-center'>
                    <p className="text-3xl font-bold mt-2 text-primary">
                      {`$${product.price}`}
                    </p>
                    <p className="font-bold mt-2 line-through text-gray-500">
                      {`$${product.originalPrice}`}
                    </p>
                    </div>
                    <button
                      href="#"
                      className="rounded-lg bg-cyan-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-800">
                          Add to cart
                    </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
              </Link>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="left-2 hidden group-hover:flex" />
        <CarouselNext className="right-2 hidden group-hover:flex" />
      </Carousel>
    </div>
  );
}