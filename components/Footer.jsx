"use client";
import React from 'react';
import {
  Footer,
  FooterCopyright,
  FooterDivider,
  FooterIcon,
  FooterLink,
  FooterLinkGroup,
  FooterTitle,
} from "flowbite-react";
import { 
  BsFacebook, 
  BsInstagram, 
  BsTwitter, 
  BsYoutube,
  BsPinterest,
  BsTruck,
  BsShieldCheck,
  BsCurrencyDollar,
  BsHeadset
} from "react-icons/bs";
const currentYear = typeof window !== 'undefined' ? new Date().getFullYear() : 2023;

function Footerr() {
  return (
    <Footer container className="bg-gray-900 text-white mt-16">
      <div className="w-full px-4 py-12 mx-auto max-w-7xl">
        {/* Top Section - Services */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 border-b border-gray-700 pb-8">
          <div className="flex items-center">
            <BsTruck className="text-2xl text-blue-400 mr-3" />
            <div>
              <h4 className="font-bold">Free Shipping</h4>
              <p className="text-sm text-gray-400">On orders over $50</p>
            </div>
          </div>
          <div className="flex items-center">
            <BsShieldCheck className="text-2xl text-blue-400 mr-3" />
            <div>
              <h4 className="font-bold">Secure Payment</h4>
              <p className="text-sm text-gray-400">100% protected</p>
            </div>
          </div>
          <div className="flex items-center">
            <BsCurrencyDollar className="text-2xl text-blue-400 mr-3" />
            <div>
              <h4 className="font-bold">Money Back</h4>
              <p className="text-sm text-gray-400">30-day returns</p>
            </div>
          </div>
          <div className="flex items-center">
            <BsHeadset className="text-2xl text-blue-400 mr-3" />
            <div>
              <h4 className="font-bold">24/7 Support</h4>
              <p className="text-sm text-gray-400">Dedicated service</p>
            </div>
          </div>
        </div>

        {/* Middle Section - Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <FooterTitle 
              title="TEMARI GEBIA" 
              className="text-xl font-bold mb-4 text-white" 
            />
            <p className="text-gray-400 mb-4">
              Your premium destination for quality products and exceptional service.
            </p>
            <div className="flex space-x-4">
              <FooterIcon href="#" icon={BsFacebook} className="text-gray-400 hover:text-white" />
              <FooterIcon href="#" icon={BsInstagram} className="text-gray-400 hover:text-white" />
              <FooterIcon href="#" icon={BsTwitter} className="text-gray-400 hover:text-white" />
              <FooterIcon href="#" icon={BsYoutube} className="text-gray-400 hover:text-white" />
              <FooterIcon href="#" icon={BsPinterest} className="text-gray-400 hover:text-white" />
            </div>
          </div>
          
          <div>
            <FooterTitle title="Shop" className="text-white" />
            <FooterLinkGroup col>
              <FooterLink href="#" className="text-gray-400 hover:text-white">All Products</FooterLink>
              <FooterLink href="#" className="text-gray-400 hover:text-white">New Arrivals</FooterLink>
              <FooterLink href="#" className="text-gray-400 hover:text-white">Featured</FooterLink>
              <FooterLink href="#" className="text-gray-400 hover:text-white">Discounts</FooterLink>
              <FooterLink href="#" className="text-gray-400 hover:text-white">Best Sellers</FooterLink>
            </FooterLinkGroup>
          </div>
          
          <div>
            <FooterTitle title="Customer Service" className="text-white" />
            <FooterLinkGroup col>
              <FooterLink href="#" className="text-gray-400 hover:text-white">Contact Us</FooterLink>
              <FooterLink href="#" className="text-gray-400 hover:text-white">FAQs</FooterLink>
              <FooterLink href="#" className="text-gray-400 hover:text-white">Shipping Info</FooterLink>
              <FooterLink href="#" className="text-gray-400 hover:text-white">Returns & Exchanges</FooterLink>
              <FooterLink href="#" className="text-gray-400 hover:text-white">Size Guide</FooterLink>
            </FooterLinkGroup>
          </div>
          
          <div>
            <FooterTitle title="About Us" className="text-white" />
            <FooterLinkGroup col>
              <FooterLink href="#" className="text-gray-400 hover:text-white">Our Story</FooterLink>
              <FooterLink href="#" className="text-gray-400 hover:text-white">Careers</FooterLink>
              <FooterLink href="#" className="text-gray-400 hover:text-white">Privacy Policy</FooterLink>
              <FooterLink href="#" className="text-gray-400 hover:text-white">Terms of Service</FooterLink>
              <FooterLink href="#" className="text-gray-400 hover:text-white">Blog</FooterLink>
            </FooterLinkGroup>
          </div>
        </div>

        {/* Bottom Section */}
        <FooterDivider className="border-gray-700" />
        <div className="w-full sm:flex sm:items-center sm:justify-between mt-8">
          <FooterCopyright 
            href="#" 
            by="TEMARI GEBIA" 
            year={new Date().getFullYear()} 
            className="text-gray-400"
          />
          <div className="mt-4 flex space-x-6 sm:mt-0">
            <img src="/payment-visa.png" alt="Visa" className="h-6" />
            <img src="/payment-mastercard.png" alt="Mastercard" className="h-6" />
            <img src="/payment-paypal.png" alt="PayPal" className="h-6" />
            <img src="/payment-applepay.png" alt="Apple Pay" className="h-6" />
          </div>
        </div>
      </div>
    </Footer>
  );
}

export default Footerr;