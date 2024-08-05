import Wrapper from '@/app/components/Wrapper'
import React from 'react'
import ProductCard from '@/app/components/ProductCard'

const page = () => {
  return (
    <div className='w-full md:py-20'>
        <Wrapper>
            <div className='text-center max-w-[800px] mx-auto mt-8 md:mt-0 '>
                <div className='text-[28px] md:text-[34px] font-semibold mb-5 leading-tight'>
                    Running Shoes
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 my-14 px-1 md:px-auto mx-28 ">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
        </Wrapper>

    </div>
  )
}

export default page