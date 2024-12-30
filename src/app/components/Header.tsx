// import Image from "next/image";
import Link from "next/link";
import { FaSearchengin } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { CgProfile } from "react-icons/cg";
import { NavigationMenuDemo } from "@/components/NavigationMenu";

// import { TiThMenu } from "react-icons/ti";
import { SheetSide } from "@/components/sheet";

export default function Header() {
  return (
         <header className="w-full h-[60px] bg-white flex justify-between items-center max-w-screen-2xl mx-auto">

            <div className=" flex justify-center items-center">
              <SheetSide/>
            <h1 className="text-xl sm:text-3xl font-bold pl-2">SHOP.CO</h1>
            </div>
            <ul className=" hidden md:block">
                <li className="space-x-5 flex items-center">
              
                <Link href={""}>< NavigationMenuDemo/>
                </Link>
                <Link href={""}>On Sale</Link>
                <Link href={""}>New Arrivals</Link>
                 <Link href={""}>Brands</Link>


                </li>
            </ul>
            <div className=" hidden md:block">
            <div className="flex justify-start items-center w-[330px] rounded-[62px] h-[48px] bg-[#F0F0F0]">
            <FaSearchengin className="text-xl ml-2"/>
             <input placeholder="search item..."  className="w-full ml-2 outline-none rounded-[62px] h-full bg-[#F0F0F0] "></input>
            </div>
            </div>

            <div className="flex items-center mr-7 space-x-4">

            <FaSearchengin className="text-xl ml-2 md:hidden"/>
                     <FiShoppingCart className="text-2xl"/>
                     <CgProfile className="text-2xl"/>
            </div>
                   
         </header>
  )
};