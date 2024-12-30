import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

interface Iproducts{
    title:string,
    price:string,
    id:number
    rating?:string,
    old_price?:string
    img_url:string
}

let product:Iproducts[] = [
    {
     title:"Gradient Graphic T-shirt",
     id:1,
     price:"$145",
     img_url:"/casual.png"
    },
    {
     title:"Polo with Tipping Details",
     id:1,
     price:"$180",
     img_url:"/casual2.png",
    
    },
    {
        title:"Black Striped T-shirt",
        id:1,
        price:"$120",
        old_price:"$150",
        img_url:"/casual3.png"
       },
       {
        title:"Skinny fit jeans",
        id:1,
        price:"$240",
        img_url:"/casual4.png",
        old_price:"$260",
       },
       {
        title:"Checked Shirt",
        id:1,
        price:"$180",
        img_url:"/casual5.png"
       },
       {
        title:"Sleeve Striped T-shirt",
        id:1,
        price:"$130",
        img_url:"/casual6.png",
        old_price:"$160"
       },
       {
        title:"Vertical Striped Shirt",
        id:1,
        price:"$212",
         old_price:"$232",
        img_url:"/casual7.png"
       },
       
    {
     title:"Courage Graphic T-shirt",
     id:1,
     price:"$145",
     img_url:"/casual8.png"
    },
    {
     title:"Loose fit Bermuda Shorts",
     id:1,
     price:"$180",
     img_url:"/casual9.png",
   

    }
]
// Adding key prop in star array
let star = [
    <FaStar key={1} />,
    <FaStar key={2} />,
    <FaStar key={3} />,
    <FaStar key={4} />,
    <FaStar key={5} />,
  ];

export default function CasualShirts(){
    return(
        <div className="w-full h-full sm:h-[500px] mt-10">
            <h1 className="text-3xl md:text-4xl font-semibold text-start">Casual</h1>
            <div className="flex flex-wrap flex-col md:flex-row justify-center items-center md:justify-between px-8 mt-10">
                {
                    product.map((data)=>{
                        return(
                              <div key={data.id}>
                                <Link href={`/products/${data.id}`}>
                                  <div className="w-[230px] h-[230px] bg-[#F0EEED] rounded-[20px]">
                                  <Image src={data.img_url} alt={data.title}
                                  className="w-full h-full rounded-[20px]"
                                 width={200} height={300}></Image>
                                 
                                  </div>
                                  </Link>
                                <div>
                                <p className="text-lg mt-2 font-bold">{data.title}</p>
                              <div className="flex text-yellow-400">
                                    {star.map((icon, index) => (
                                        <span key={index}>{icon}</span>
                                    ))}
                                </div>
                                <p  className="font-bold mt-1">{data.price} <span className="text-gray-400 font-bold line-through"> {data.old_price} </span></p>
                                </div>
                              </div>
                        )
                    })
                }
            </div>
        </div>
    )
}