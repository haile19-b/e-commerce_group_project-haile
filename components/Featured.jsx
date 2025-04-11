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
import { useProductStore } from '@/lib/zustand';
import { FaShoppingCart,FaClipboardCheck } from "react-icons/fa";
import { Button } from 'flowbite-react';

export default function FeaturedProducts() {

  const {products} = useProductStore();

  const Featured = products.filter((item)=>item.isFeatured === true)


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
          {Featured.map((product) => (
            <CarouselItem 
              key={product.id} 
              className="pl-2 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
            >
             <Link href={`/customer-facing/product/${product.id}`}>
              <div className="p-2">
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <img
                      src={product.images[0]}
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
                    <Button
                      color={product.isInCart ? "green" : "blue"}
                      size="sm"
                      className={`flex-1 transition-all ${product.isInCart ? '' : 'hover:-translate-y-0.5'}`}
                      onClick={(e) => {
                        e.preventDefault()
                        toggleCart(product.id);
                      }}
                    >
                      {product.isInCart ? (
                        <div className="flex items-center justify-center gap-1">
                          <FaClipboardCheck className="text-white" />
                          <span>Added</span>
                        </div>
                      ) : (
                        <div className="flex items-center justify-center gap-1">
                          <FaShoppingCart />
                          <span>Add to Cart</span>
                        </div>
                      )}
                    </Button>
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