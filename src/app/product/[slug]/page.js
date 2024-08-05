import React from "react";
import Wrapper from "@/app/components/Wrapper";
import ProductDetails from "@/app/components/ProductDetails";
import { IoMdHeartEmpty } from "react-icons/io";
import RelatedProducts from "@/app/components/RelatedProducts";
const page = () => {
  return (
    <div className="w-full md:py-20">
      <Wrapper>
        <div className="flex flex-col lg:flex-row md:px-10 gap-[50px] lg:gap-[100px]">
          <div className="w-full md:w-auto flex-[1.5] max-w-[500px] lg:max-w-full mx-auto lg:mx-0">
            <ProductDetails />
          </div>
          <div className="flex-[1] py-3">
            <div className="flex-[1] py-3">
              {/* PRODUCT TITLE */}
              <div className="text-[34px] font-semibold mb-2 leading-tight">
                Product
              </div>

              {/* PRODUCT SUBTITLE */}
              <div className="text-lg font-semibold mb-5">
                Cushioning for Your Miles
              </div>

              {/* PRODUCT PRICE */}
              <div className="flex items-center">
                <p className="mr-2 text-lg font-semibold">MRP : &#8377;265</p>
              </div>

              <div className="text-md font-medium text-black/[0.5]">
                incl. of taxes
              </div>
              <div className="text-md font-medium text-black/[0.5] mb-20">
                {`(Also includes all applicable duties)`}
              </div>

              {/* PRODUCT SIZE RANGE START */}
              <div className="mb-10">
                {/* HEADING START */}
                <div className="flex justify-between mb-2">
                  <div className="text-md font-semibold">Select Size</div>
                  <div className="text-md font-medium text-black/[0.5] cursor-pointer">
                    Select Guide
                  </div>
                </div>
                {/* HEADING END */}

                {/* SIZE START */}
                <div id="sizesGrid" className="grid grid-cols-3 gap-2">
                  <div
                    className={`border rounded-md text-center py-3 font-medium ${1}
                        ? "hover:border-black cursor-pointer"
                        : "cursor-not-allowed bg-black/[0.1] opacity-50"
                    } `}
                  >
                    20
                  </div>
                  <div
                    className={`border rounded-md text-center py-3 font-medium 
                        hover:border-black cursor-pointer"
                        
                    } `}
                  >
                    30
                  </div>
                  <div
                    className={`border rounded-md text-center py-3 font-medium 
                        hover:border-black cursor-pointer"
                        
                    } `}
                  >
                    40
                  </div>
                  <div
                    className={`border rounded-md text-center py-3 font-medium 
                        hover:border-black cursor-pointer"
                        
                    } `}
                  >
                    50
                  </div>
                  <div
                    className={`border rounded-md text-center py-3 font-medium 
                        hover:border-black cursor-pointer"
                        
                    } `}
                  >
                    60
                  </div>
                  <div
                    className={`border rounded-md text-center py-3 font-medium ${1}
                        ? "hover:border-black cursor-pointer"
                        : "cursor-not-allowed bg-black/[0.1] opacity-50"
                    } `}
                  >
                    70
                  </div>
                </div>
                {/* SIZE END */}

                {/* SHOW ERROR START */}

                {/* SHOW ERROR END */}
              </div>
              {/* PRODUCT SIZE RANGE END */}

              {/* ADD TO CART BUTTON START */}
              <button
                            className="w-full py-4 rounded-full bg-black text-white text-lg font-medium transition-transform active:scale-95 mb-3 hover:opacity-75"
                            
                            
                        >
                            Add to Cart
                        </button>
              {/* ADD TO CART BUTTON END */}

              {/* WHISHLIST BUTTON START */}
              <button className="w-full py-4 rounded-full border border-black text-lg font-medium transition-transform active:scale-95 flex items-center justify-center gap-2 hover:opacity-75 mb-10">
                Whishlist
                <IoMdHeartEmpty size={20} />
              </button>
              {/* WHISHLIST BUTTON END */}

              <div>
                <div className="text-lg font-bold mb-5">Product Details</div>
                <div className="markdown text-md mb-5">
                  <p>
                    I don't have any time available to keep maintaining this
                    package. If you have any request, try to sort it within the
                    community. I'm able to merge pull requests that look safe
                    from time to time but no commitment on timelines here. Feel
                    free to fork it and publish under other name if you are in a
                    hurry or to use another component.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <RelatedProducts/>
      </Wrapper>
    </div>
  );
};

export default page;
