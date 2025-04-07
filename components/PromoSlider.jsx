import React from 'react';
import { Carousel } from "flowbite-react";

const promotionTheme = {
  root: {
    base: "relative h-full w-full rounded-xl overflow-hidden shadow-lg",
  },
  indicators: {
    active: {
      off: "bg-white/50 hover:bg-white",
      on: "bg-white"
    },
    base: "h-2 w-8 rounded-full transition-all duration-300", // Wider indicators
    wrapper: "absolute bottom-6 left-1/2 flex -translate-x-1/2 space-x-2"
  },
  control: {
    base: "inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm group-hover:bg-white/50 sm:h-12 sm:w-12",
    icon: "h-5 w-5 text-black sm:h-6 sm:w-6"
  },
  scrollContainer: {
    base: "flex h-full snap-mandatory overflow-y-hidden overflow-x-hidden", // Hide all scrollbars
    snap: "snap-x"
  }
};

const promotions = [
  {
    id: 1,
    title: "Summer Sale!",
    subtitle: "Up to 50% off selected items",
    image: "https://images.unsplash.com/photo-1462396240927-52058a6a84ec?w=1200&auto=format&fit=crop",
    cta: "Shop Now",
    bgColor: "bg-gradient-to-r from-amber-500 to-orange-600"
  },
  {
    id: 2,
    title: "New Arrivals",
    subtitle: "Discover our latest collection",
    image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=1200&auto=format&fit=crop",
    cta: "Explore",
    bgColor: "bg-gradient-to-r from-blue-500 to-purple-600"
  },
  {
    id: 3,
    title: "Limited Time Offer",
    subtitle: "Free shipping on orders over $50",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1200&auto=format&fit=crop",
    cta: "Claim Offer",
    bgColor: "bg-gradient-to-r from-green-500 to-teal-600"
  }
];

export default function PromoSlider() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 mb-8">
      <div className="h-64 md:h-80 lg:h-96 rounded-xl">
        <Carousel 
          theme={promotionTheme}
          slideInterval={2000}
          pauseOnHover={true}
          className="h-full"
        >
          {promotions.map((promo) => (
            <div 
              key={promo.id} 
              className={`relative h-full w-full flex items-center ${promo.bgColor} text-white`}
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 bg-black/30 z-0" />
              <img 
                src={promo.image} 
                alt={promo.title}
                className="absolute inset-0 w-full h-full object-cover z-0"
              />
              
              {/* Promo Content */}
              <div className="relative z-10 px-8 md:px-16 max-w-2xl">
                <h3 className="text-2xl md:text-4xl font-bold mb-2">{promo.title}</h3>
                <p className="text-lg md:text-xl mb-6">{promo.subtitle}</p>
                <button className="px-6 py-2 bg-white text-gray-900 font-medium rounded-full hover:bg-gray-100 transition-colors">
                  {promo.cta}
                </button>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}