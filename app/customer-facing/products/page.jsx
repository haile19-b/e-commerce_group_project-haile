import BestSelling from '@/components/BestSelling'
import Filterr from '@/components/Filter'
import ProductList from '@/components/ProductList'
import { SideFilter } from '@/components/SideFilter'
import PromoSlider from '@/components/PromoSlider'
import React from 'react'
import FeaturedProducts from '@/components/Featured'

function page() {
  return (
    <div>
      <div className='flex gap-2'>
        <SideFilter/>
      <PromoSlider/>
      </div>
      <FeaturedProducts/>
      <BestSelling/>
      <Filterr/>
     <div className='px-[50px]'> <ProductList/></div>
    </div>
  )
}

export default page
