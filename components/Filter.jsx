import React from 'react';
import { TabItem, Tabs } from "flowbite-react";

const Filterr = () => {
  // Filter options stored in arrays
  const categories = ["All","Electronics", "Clothing", "Home", "Beauty", "Sports"];

  return (
    <div className="flex flex-col gap-4 p-4 w-full">
      {/* Categories Filter */}
      <div className='mx-auto'>
        <h3 className="mb-1 text-[20px] font-bold text-gray-900 dark:text-white">Categories</h3>
        <Tabs aria-label="Categories" variant="pills" className="flex-wrap">
          {categories.map((category, index) => (
            <TabItem 
              key={index}
              title={category}
              className="px-4 py-2 text-sm font-medium transition-all hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {/* Content can be added here if needed */}
            </TabItem>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Filterr;