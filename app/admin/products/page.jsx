"use client";
import { Card, Button, Badge, Pagination } from "flowbite-react";
import { useState } from "react";
import { FiEdit2, FiTrash2, FiEye, FiSearch, FiFilter } from "react-icons/fi";

export default function ProductManagementPage() {
  // Sample product data
  const products = [
    {
      id: 1,
      name: "Apple Watch Series 7",
      category: "Electronics",
      price: 599,
      stock: 15,
      status: "Active",
      image: "https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg"
    },
    {
      id: 2,
      name: "Premium Headphones",
      category: "Electronics",
      price: 249,
      stock: 32,
      status: "Active",
      image: "https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg"
    },
    {
      id: 3,
      name: "Organic Cotton T-Shirt",
      category: "Clothing",
      price: 39,
      stock: 0,
      status: "Out of Stock",
      image: "https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg"
    },
    {
      id: 4,
      name: "Wireless Charger",
      category: "Accessories",
      price: 29,
      stock: 48,
      status: "Active",
      image: "https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg"
    },
    {
      id: 5,
      name: "Leather Wallet",
      category: "Accessories",
      price: 79,
      stock: 8,
      status: "Low Stock",
      image: "https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg"
    }
  ];

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;
  const totalPages = Math.ceil(products.length / productsPerPage);

  // Get current products
  const currentProducts = products.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  // Handle product actions
  const handleView = (productId) => {
    console.log("View product:", productId);
    // Add your view logic here
  };

  const handleEdit = (productId) => {
    console.log("Edit product:", productId);
    // Add your edit logic here
  };

  const handleDelete = (productId) => {
    console.log("Delete product:", productId);
    // Add your delete logic here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Product Management</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            />
          </div>
          <Button color="gray" className="flex items-center">
            <FiFilter className="mr-2" />
            Filter
          </Button>
        </div>
      </div>

      <Card>
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">Product</th>
                <th scope="col" className="px-6 py-3">Category</th>
                <th scope="col" className="px-6 py-3">Price</th>
                <th scope="col" className="px-6 py-3">Stock</th>
                <th scope="col" className="px-6 py-3">Status</th>
                <th scope="col" className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product) => (
                <tr 
                  key={product.id} 
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="flex-shrink-0 h-10 w-10">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                      </div>
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900 dark:text-white">{product.name}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">{product.category}</td>
                  <td className="px-6 py-4">${product.price.toFixed(2)}</td>
                  <td className="px-6 py-4">{product.stock}</td>
                  <td className="px-6 py-4">
                    <Badge
                      color={
                        product.status === "Active" ? "success" :
                        product.status === "Out of Stock" ? "failure" : "warning"
                      }
                      className="inline-flex items-center"
                    >
                      {product.status}
                    </Badge>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex space-x-2">
                      <Button 
                        size="xs" 
                        color="light" 
                        onClick={() => handleView(product.id)}
                        className="hover:text-blue-600"
                      >
                        <FiEye className="mr-1" /> View
                      </Button>
                      <Button 
                        size="xs" 
                        color="light" 
                        onClick={() => handleEdit(product.id)}
                        className="hover:text-green-600"
                      >
                        <FiEdit2 className="mr-1" /> Edit
                      </Button>
                      <Button 
                        size="xs" 
                        color="light" 
                        onClick={() => handleDelete(product.id)}
                        className="hover:text-red-600"
                      >
                        <FiTrash2 className="mr-1" /> Remove
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <div className="text-sm text-gray-700 dark:text-gray-400">
            Showing <span className="font-semibold">{(currentPage - 1) * productsPerPage + 1}</span> to{" "}
            <span className="font-semibold">
              {Math.min(currentPage * productsPerPage, products.length)}
            </span>{" "}
            of <span className="font-semibold">{products.length}</span> products
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            showIcons
          />
        </div>
      </Card>
    </div>
  );
}