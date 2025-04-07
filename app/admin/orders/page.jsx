"use client";
import { Card, Button, Badge, Pagination } from "flowbite-react";
import { useState } from "react";
import { FiTruck, FiCheckCircle, FiClock, FiDollarSign, FiSearch, FiFilter } from "react-icons/fi";

export default function OrderManagementPage() {
  // Sample order data
  const orders = [
    {
      id: "#EC-7845",
      customer: {
        name: "Neil Sims",
        email: "neil@example.com",
        avatar: "https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg"
      },
      date: "May 15, 2023",
      status: "Shipped",
      payment: "Paid",
      total: 320,
      items: 3
    },
    {
      id: "#EC-7621",
      customer: {
        name: "Bonnie Green",
        email: "bonnie@example.com",
        avatar: "https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg"
      },
      date: "April 28, 2023",
      status: "Delivered",
      payment: "Paid",
      total: 3467,
      items: 5
    },
    {
      id: "#EC-7498",
      customer: {
        name: "Michael Gough",
        email: "michael@example.com",
        avatar: "https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg"
      },
      date: "April 5, 2023",
      status: "Processing",
      payment: "Pending",
      total: 67,
      items: 1
    },
    {
      id: "#EC-7352",
      customer: {
        name: "Lana Byrd",
        email: "lana@example.com",
        avatar: "https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg"
      },
      date: "March 22, 2023",
      status: "Cancelled",
      payment: "Refunded",
      total: 367,
      items: 2
    },
    {
      id: "#EC-7129",
      customer: {
        name: "Thomas Lean",
        email: "thomas@example.com",
        avatar: "https://m.media-amazon.com/images/I/61ZjlBOp+rL.jpg"
      },
      date: "March 10, 2023",
      status: "Delivered",
      payment: "Paid",
      total: 2367,
      items: 4
    }
  ];

  // State for pagination
  const [currentPage, setCurrentPage] = useState(1);
  const ordersPerPage = 4;
  const totalPages = Math.ceil(orders.length / ordersPerPage);

  // Get current orders
  const currentOrders = orders.slice(
    (currentPage - 1) * ordersPerPage,
    currentPage * ordersPerPage
  );

  // Handle order actions
  const handleViewDetails = (orderId) => {
    console.log("View order details:", orderId);
    // Add your view logic here
  };

  const handleUpdateStatus = (orderId) => {
    console.log("Update order status:", orderId);
    // Add your status update logic here
  };

  const handleProcessRefund = (orderId) => {
    console.log("Process refund for order:", orderId);
    // Add your refund logic here
  };

  const handlePrintInvoice = (orderId) => {
    console.log("Print invoice for order:", orderId);
    // Add your print logic here
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Order Management</h1>
        <div className="flex space-x-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiSearch className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search orders..."
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
        <div className="mb-4 flex items-center justify-between">
          <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">Recent Orders</h5>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            Showing {((currentPage - 1) * ordersPerPage) + 1}-{Math.min(currentPage * ordersPerPage, orders.length)} of {orders.length} orders
          </div>
        </div>
        
        <div className="flow-root">
          <ul className="divide-y divide-gray-200 dark:divide-gray-700">
            {currentOrders.map((order) => (
              <li key={order.id} className="py-3 sm:py-4">
                <div className="flex items-center space-x-4">
                  <div className="shrink-0">
                    <img
                      alt={order.customer.name}
                      src={order.customer.avatar}
                      className="h-10 w-10 rounded-full"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between">
                      <p className="truncate text-sm font-medium text-gray-900 dark:text-white">
                        {order.customer.name}
                      </p>
                      <Badge
                        color={
                          order.status === "Delivered" ? "success" :
                          order.status === "Shipped" ? "info" :
                          order.status === "Processing" ? "warning" : "failure"
                        }
                        className="ml-2"
                      >
                        {order.status}
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <p className="truncate text-sm text-gray-500 dark:text-gray-400">
                        {order.id} • {order.date} • {order.items} item{order.items > 1 ? 's' : ''}
                      </p>
                      <Badge
                        color={
                          order.payment === "Paid" ? "success" :
                          order.payment === "Pending" ? "warning" : "failure"
                        }
                        className="ml-2"
                      >
                        {order.payment}
                      </Badge>
                    </div>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    ${order.total.toFixed(2)}
                  </div>
                </div>
                
                {/* Order action buttons */}
                <div className="flex flex-wrap gap-2 mt-3 ml-14">
                  <Button 
                    size="xs" 
                    color="light" 
                    onClick={() => handleViewDetails(order.id)}
                    className="hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    View Details
                  </Button>
                  <Button 
                    size="xs" 
                    color="light" 
                    onClick={() => handleUpdateStatus(order.id)}
                    className="hover:bg-blue-50 dark:hover:bg-blue-900/30"
                  >
                    <FiTruck className="mr-1" /> Update Status
                  </Button>
                  {order.payment !== "Refunded" && (
                    <Button 
                      size="xs" 
                      color="light" 
                      onClick={() => handleProcessRefund(order.id)}
                      className="hover:bg-red-50 dark:hover:bg-red-900/30"
                    >
                      <FiDollarSign className="mr-1" /> Process Refund
                    </Button>
                  )}
                  <Button 
                    size="xs" 
                    color="light" 
                    onClick={() => handlePrintInvoice(order.id)}
                    className="hover:bg-green-50 dark:hover:bg-green-900/30"
                  >
                    <FiCheckCircle className="mr-1" /> Print Invoice
                  </Button>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4">
          <div className="hidden sm:block text-sm text-gray-700 dark:text-gray-400">
            Page {currentPage} of {totalPages}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            showIcons
            className="flex-wrap"
          />
        </div>
      </Card>
    </div>
  );
}