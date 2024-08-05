import Image from "next/image";
import Hero from "./components/Hero";
import HeroSection from "./components/HeroSection";
import Wrapper from "./components/Wrapper";
import ProductCard from "./components/ProductCard";

export default function Home() {
  return (
    <main className="">
      <HeroSection />
      <Wrapper>
        <div className="text-center max-w-[800px]  mx-auto my-[10px] md:my-[50px]">
          <div className="text-[18px] md:text-[34px] mb-2 -mt-8 font-semibold leading-tight">
            Cushioning for Your Miles
          </div>
          <div className="text-xs md:text-xl">
            A lightweight Nike ZoomX midsole is combined with increased stack
            heights to help provide cushioning during extended stretches of
            running.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1 my-14 px-1 md:px-auto mx-28">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
      </Wrapper>
    </main>
  );
}
