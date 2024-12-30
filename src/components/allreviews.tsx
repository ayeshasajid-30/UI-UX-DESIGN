import { Check } from "lucide-react";
import { FaStar } from "react-icons/fa6";
import { Button } from "./ui/button";

const Review = [
    {
      name: "Sarah M.",
      feedback:
        "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”",
      rating: 5,
      verified: true,
      date:"Posted on August 14, 2023",
    },
    {
      name: "John D.",
      feedback:
        "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”",
      rating: 5,
      verified: true,
      date:"Posted on August 14, 2023",
    },
    {
      name: "Emma L.",
      feedback:
      "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
      verified: false,
      date:"Posted on August 14, 2023",
    },
    {
      name: "Michael B.",
      feedback:
       "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
      verified: true,
      date:"Posted on August 14, 2023",
    },
    {
      name: "Sophia K.",
      feedback:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
      verified: true,
      date:"Posted on August 14, 2023",
    },
    {
      name: "Sophia K.",
      feedback:
        "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
      rating: 5,
      verified: true,
      date:"Posted on August 14, 2023",
    },
  ];
// Adding key prop in star array
let star = [
    <FaStar key={1} />,
    <FaStar key={2} />,
    <FaStar key={3} />,
    <FaStar key={4} />,
    <FaStar key={5} />,
];
  
export default function AllReview(){
    return(
        <main className=" max-w-screen-2xl mx-auto">
             {/* top */}
             <div className="p-5 flex justify-between">
             <h1 className="text-2xl">All Reviews</h1>
               <div className="flex space-x-3">
               <Button variant={"outline"} className="hidden md:block">Latest</Button>
               <Button>Write Now Review</Button>
               </div>
             </div>
             {/* container */}
             <div>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 mt-3 md:mt-0">
                  {
                    Review.map((data,i)=>{
                      return (
                             <div className=" border p-5 rounded-[20px]" key={i}>
                               <div className="flex text-yellow-400">
                                    {star.map((icon, index) => (
                                        <span key={index}>{icon}</span>
                                    ))}
                                </div>                              <h2 className="font-bold text-xl mt-1 flex">{data.name} <Check className="bg-green-500  rounded-full text-white"/> </h2>
                              <p className="text-sm">{data.feedback}</p>
                              <p className="mt-5 text-gray-400">{data.date}</p>
                             </div>
                      )
                    })
                  }
                 </div>
             </div>
        </main>
    )
}