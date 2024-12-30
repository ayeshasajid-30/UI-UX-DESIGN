

import { BreadcrumbDemo } from "@/components/breadcrumb"
import { Button } from "@/components/ui/button"
import { Delete, Minus, Plus } from "lucide-react"
import Image from "next/image"



interface Icart {
    imageurl:string,
    title:string,
    id:number
    size:string,
    color:string,
    price:string,
}
const cartItem:Icart[] = [
    {
     imageurl:"/cart1.png",
    title:"Gradient Graphic T-shirt",
    id:1,
    size:"large",
    color:"White",
    price:"$145",
    },
    {
     imageurl:"/cart2.png",
    title:"Checked T-shirt",
    id:2,
    size:"Medium",
    color:"Red",
    price:"$180",
    },
    {
     imageurl:"/cart3.png",
    title:"Skinny Fit Jeans",
    id:3,
    size:"large",
    color:"Blue",
    price:"$240",
    }
]

export default function Cart(){
    return(
        <>
           <div className=" pl-5">
           
           <BreadcrumbDemo/>
           <h1 className="text-2xl font-extrabold mt-2">YOUR CART</h1>
           </div>
        <div className="flex flex-col md:flex-row justify-center items-start gap-3 mt-6">
            
              {/* left div */}
                 <div className="w-full h-full md:w-[700px] md:h-[600px] border rounded-[20px]">
                       {
                        cartItem.map((item)=>{
                            return(
                                <div className="flex justify-between  mt-2 p-4 border-b" key={item.id}>
                                   <div className="flex gap-3">
                                   <Image src={item.imageurl} alt={item.title} className="rounded-[16px]" width={100} height={120}></Image>
                                      <div>    
                                          <h3 className="font-bold">{item.title}</h3>
                                          <p className="text-sm">Size:{item.size}</p>
                                          <p className="text-sm">Color:{item.color}</p>
                                          <p className="font-bold">{item.price}</p>
                                      </div>
                                   </div>
                                              {/* right side */}
                                             <div className="flex flex-col justify-between items-center space-y-5">
                                             <Delete/>
                                              <div className="w-[100px] h-[40px] flex justify-between p-3 items-center rounded-[62px] bg-[#F0F0F0] text-gray-400 ">
                                                   <Minus/>
                                                   1
                                                   <Plus/>
                                               </div>
                                             </div>
                                </div>
                            )
                        })
                       }
                 </div>
              {/* right div */}
              <div className="w-full md:w-[400px] h-[200] md:h-[350px] border rounded-[20px]  flex flex-col justify-start items-center p-4">
                   <div className="w-[90%] space-y-2">
                   <h1 className="text-xl font-bold">Order Summary</h1>
                    <p className="flex justify-between">Subtotal <span>$565</span> </p>
                    <p className="flex justify-between">Discount (-20%) <span>$-113</span> </p>
                    <p className="flex justify-between">Delivery Fee <span>$15</span> </p>
                    <p className="flex justify-between">Total <span>$467</span> </p>
                   <div className="flex">
                   <input className="bg-[#F0F0F0] w-[200px] md:w-full py-2 px-5 rounded-[16px] text-gray-600 outline-none" placeholder="Add promo code" />
                   <Button className="ml-1">Apply</Button>
                   </div>
                    <Button className="w-full">Go To Checkout</Button>
                    
                   </div>
              </div>
        </div>
        </>
    )
}