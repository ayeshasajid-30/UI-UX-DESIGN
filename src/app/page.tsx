

import Hero from "./components/Hero";
import Fonts from "./components/fonts";
import Product from "./products/page"
import Top_sell from "./products/sell";
import Dress from "./components/dress";


import CustomerCarousel from "./components/Carousel";




export default function Home() {
  return (
    <div>
    
     <Hero/>
     <Fonts/>
     <Product/>
     <Top_sell/>
     <Dress/>
     <CustomerCarousel/>
     
     
      
    </div>
  )
};
