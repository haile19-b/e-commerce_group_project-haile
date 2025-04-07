"use client";
import { useState } from 'react';
import { Button, Checkbox, Label, TextInput, Textarea, FileInput, Radio, Select } from 'flowbite-react';
import { FiPlus, FiTrash2 } from 'react-icons/fi';
import { Card } from "flowbite-react";

export default function AddProductPage() {
  // Temporary array of existing categories
  const existingCategories = [
    "Electronics",
    "Clothing",
    "Home & Kitchen",
    "Books",
    "Beauty",
    "Sports"
  ];

  const [productData, setProductData] = useState({
    name: '',
    description: '',
    price: '',
    category: '',
    newCategory: '',
    inventory: '',
    images: Array(5).fill(null),
    isFeatured: false,
    status: 'active'
  });

  const [showNewCategoryInput, setShowNewCategoryInput] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProductData(prev => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (e) => {
    const value = e.target.value;
    if (value === "new") {
      setShowNewCategoryInput(true);
      setProductData(prev => ({ ...prev, category: '' }));
    } else {
      setShowNewCategoryInput(false);
      setProductData(prev => ({ ...prev, category: value, newCategory: '' }));
    }
  };

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newImages = [...productData.images];
      newImages[index] = {
        url: URL.createObjectURL(file),
        file: file
      };
      setProductData(prev => ({ ...prev, images: newImages }));
    }
  };

  const removeImage = (index) => {
    const newImages = [...productData.images];
    newImages[index] = null;
    setProductData(prev => ({ ...prev, images: newImages }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Prepare the final product object
    const finalProduct = {
      ...productData,
      // Use newCategory if provided, otherwise use selected category
      category: showNewCategoryInput ? productData.newCategory : productData.category,
      // Convert price to number
      price: parseFloat(productData.price),
      // Convert inventory to number
      inventory: parseInt(productData.inventory),
      // Filter out null images
      images: productData.images.filter(img => img !== null)
    };

    console.log('Product submitted:', finalProduct);
    // Add your form submission logic here
    // You can send finalProduct to your API

    // Reset form after submission (optional)
    setProductData({
      name: '',
      description: '',
      price: '',
      category: '',
      newCategory: '',
      inventory: '',
      images: Array(5).fill(null),
      isFeatured: false,
      status: 'active'
    });
    setShowNewCategoryInput(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Add New Product</h1>
      
      <form onSubmit={handleSubmit} className="space-y-6 max-w-4xl">
        {/* Basic Information Section */}
        <Card className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Basic Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="mb-2 block">
                <Label htmlFor="name" value="Product Name*" />
              </div>
              <TextInput
                id="name"
                name="name"
                value={productData.name}
                onChange={handleInputChange}
                placeholder="Enter product name"
                required
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="price" value="Price*" />
              </div>
              <TextInput
                id="price"
                name="price"
                type="number"
                value={productData.price}
                onChange={handleInputChange}
                placeholder="0.00"
                required
                addon="$"
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="category" value="Category*" />
              </div>
              <div className="space-y-2">
                <Select
                  id="category"
                  name="category"
                  value={showNewCategoryInput ? "new" : productData.category}
                  onChange={handleCategoryChange}
                  required
                >
                  <option value="">Select a category</option>
                  {existingCategories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                  <option value="new">+ Add New Category</option>
                </Select>
                
                {showNewCategoryInput && (
                  <TextInput
                    id="newCategory"
                    name="newCategory"
                    value={productData.newCategory}
                    onChange={handleInputChange}
                    placeholder="Enter new category name"
                    required
                  />
                )}
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <Label htmlFor="inventory" value="Inventory*" />
              </div>
              <TextInput
                id="inventory"
                name="inventory"
                type="number"
                value={productData.inventory}
                onChange={handleInputChange}
                placeholder="Available quantity"
                required
              />
            </div>
          </div>
        </Card>

        {/* Image Upload Section */}
        <Card className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Product Images</h2>
          <div className="mb-4">
            <Label value="Main Image*" />
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
              This will be the featured image for your product
            </p>
            <FileInput
              className="mt-2"
              id="main-image"
              onChange={(e) => handleImageUpload(e, 0)}
            />
            <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
              SVG, PNG, JPG or GIF (MAX. 5MB)
            </p>
            {productData.images[0] && (
              <div className="mt-3 relative w-40 h-40">
                <img
                  src={productData.images[0].url}
                  alt="Main product"
                  className="w-full h-full object-contain rounded-lg border"
                />
                <button
                  type="button"
                  onClick={() => removeImage(0)}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                >
                  <FiTrash2 className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
            {[1, 2, 3, 4].map((index) => (
              <div key={index} className="space-y-2">
                <Label value={`Additional Image ${index}`} />
                <FileInput
                  id={`image-${index}`}
                  onChange={(e) => handleImageUpload(e, index)}
                />
                {productData.images[index] && (
                  <div className="relative w-full h-40 mt-2">
                    <img
                      src={productData.images[index].url}
                      alt={`Product variant ${index}`}
                      className="w-full h-full object-contain rounded-lg border"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                    >
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Card>

        {/* Description Section */}
        <Card className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Product Description</h2>
          <div className="mb-2 block">
            <Label htmlFor="description" value="Detailed Description*" />
          </div>
          <Textarea
            id="description"
            name="description"
            value={productData.description}
            onChange={handleInputChange}
            placeholder="Describe your product in detail..."
            required
            rows={6}
          />
        </Card>

        {/* Settings Section */}
        <Card className="mb-6">
          <h2 className="text-xl font-semibold mb-4">Product Settings</h2>
          <div className="space-y-4">
            <div>
              <Label value="Product Status*" />
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center">
                  <Radio
                    id="status-active"
                    name="status"
                    value="active"
                    checked={productData.status === 'active'}
                    onChange={handleInputChange}
                  />
                  <Label htmlFor="status-active" className="ml-2">
                    Active
                  </Label>
                </div>
                <div className="flex items-center">
                  <Radio
                    id="status-draft"
                    name="status"
                    value="draft"
                    checked={productData.status === 'draft'}
                    onChange={handleInputChange}
                  />
                  <Label htmlFor="status-draft" className="ml-2">
                    Draft
                  </Label>
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <Checkbox
                  id="isFeatured"
                  name="isFeatured"
                  checked={productData.isFeatured}
                  onChange={(e) => setProductData(prev => ({ ...prev, isFeatured: e.target.checked }))}
                />
                <Label htmlFor="isFeatured">Feature this product</Label>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                Featured products will be highlighted on the homepage
              </p>
            </div>
          </div>
        </Card>

        {/* Form Actions */}
        <div className="flex justify-end gap-3">
          <Button color="gray" type="button">
            Cancel
          </Button>
          <Button color="blue" type="submit">
            <FiPlus className="mr-2" />
            Add Product
          </Button>
        </div>
      </form>
    </div>
  );
}