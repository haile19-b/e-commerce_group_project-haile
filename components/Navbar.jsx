"use client"
import {
  Avatar,
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
  Navbar,
  NavbarBrand,
  NavbarCollapse,
  NavbarLink,
  NavbarToggle,
} from "flowbite-react";
import { CiHeart, CiSearch } from "react-icons/ci";
import { IoCartOutline } from "react-icons/io5";
import { FaOpencart } from "react-icons/fa";
import Link from "next/link";
import { useProductStore } from "@/lib/zustand";

function Nav() {

  const { products } = useProductStore();
  const savedProductsCount = products.filter(item => item.isSaved === true).length;
  const cartAdded = products.filter(item => item.isInCart === true).length;

  return (
    <Navbar 
      fluid 
      rounded 
      className="border-b border-gray-200 bg-white shadow-sm sticky top-0 z-50"
    >
      {/* Logo/Brand */}
      <NavbarBrand href="/customer-facing/products" className="ml-4">
        <span className="self-center whitespace-nowrap text-2xl font-bold text-gray-800">
          Yegna GEBIA
        </span>
      </NavbarBrand>

      {/* Search Bar - Center Positioned */}
      <div className="hidden md:flex items-center mx-4 flex-1 max-w-xl">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="w-full h-10 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <CiSearch 
            size={20} 
            className="absolute right-3 top-2.5 text-gray-400" 
          />
        </div>
      </div>

      {/* Right Side Icons */}
      <div className="flex items-center gap-6 md:order-2 mr-4">
        <button className="p-2 text-gray-700 hover:text-blue-600 relative">
          <Link href={'/customer-facing/wish'} >
          <CiHeart size={22} />
          </Link>
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            {
              savedProductsCount
            }
          </span>
        </button>
        
        <button className="p-2 text-gray-700 hover:text-blue-600 relative">
          <Link href='/customer-facing/cart'>
          <IoCartOutline size={22} />
          </Link>
          <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
            {cartAdded}
          </span>
        </button>

        {/* User Dropdown */}
        <Dropdown
          arrowIcon={false}
          inline
          label={
            <Avatar 
              alt="User" 
              img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" 
              rounded
              className="border-2 border-gray-300 hover:border-blue-500 transition-colors"
            />
          }
        >
          <DropdownHeader className="bg-gray-50">
            <span className="block text-sm font-semibold">Bonnie Green</span>
            <span className="block truncate text-sm text-gray-500">name@flowbite.com</span>
          </DropdownHeader>
          <Link href={'/customer-facing/account'} >
          <DropdownItem className="hover:bg-gray-100">Dashboard</DropdownItem>
          </Link>
          <DropdownDivider className="my-1" />
          <DropdownItem className="text-red-600 hover:bg-red-50">Sign out</DropdownItem>
        </Dropdown>
        
        <NavbarToggle className="ml-2" />
      </div>

      {/* Navigation Links */}
      <NavbarCollapse className="md:border-t md:mt-2 md:pt-2">
        <NavbarLink
          href="/customer-facing/products" 
          active
          className="text-blue-600 md:hover:bg-transparent md:hover:text-blue-700 md:p-0"
        >
          Home
        </NavbarLink>
        <NavbarLink 
          href="/customer-facing/contact" 
          className="text-gray-700 hover:text-blue-600 md:hover:bg-transparent md:p-0"
        >
          Contact
        </NavbarLink>
        <NavbarLink 
          href="/customer-facing/about" 
          className="text-gray-700 hover:text-blue-600 md:hover:bg-transparent md:p-0"
        >
          About
        </NavbarLink>
        
        {/* Mobile Search - Hidden on desktop */}
        <div className="md:hidden mt-3">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full h-10 pl-4 pr-10 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <CiSearch 
              size={20} 
              className="absolute right-3 top-2.5 text-gray-400" 
            />
          </div>
        </div>
      </NavbarCollapse>
    </Navbar>
  );
}

export default Nav;