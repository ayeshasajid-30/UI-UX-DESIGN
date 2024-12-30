//  import Image from "next/image"
//  export default function Dress(){
//      return(
//          <div>
//             <div className="w-full h-full mt-8 sm:h-[500px] bg-[#F0F0F0] flex  flex-col justify-start items-center pt-8">
//                  {/* top div */}
//                 <div className="mt-2">
//                 <h1 className="text-3xl font-bold pl-6 sm:pl-0">BROWSE BY DRESS STYLE</h1>
//                  </div>


//                  {/* bottom div */}
//           <div className="bg-[#F0F0F0] w-[90%] h-full sm:h-[600px] flex flex-wrap justify-center items-center mt-5">
//                     <div className="bg-[#FFFFFF] w-[400px] h-[200px] m-1 relative">
//                      <Image src={"/dressstyle1.png"} className="w-full h-full rounded-2xl" objectFit="cover" width={100} height={100} alt="dress style1"></Image>
//                      <span className="absolute top-10 left-5 font-bold text-xl">Casual</span>
//                      </div>
                  
//                      <div className="bg-[#FFFFFF] w-[600px] h-[200px] m-1 relative"><Image src={"/dressstyle2.png"} className="w-full h-full rounded-2xl" objectFit="cover" width={100} height={100} alt="dress style2"></Image>
//                      <span className="absolute top-10 left-5 font-bold text-xl">Formal</span>
//                      </div>
//                      <div className="bg-[#FFFFFF] w-[600px] h-[200px] m-1 relative"><Image src={"/dressstyle3.png"} className="w-full h-full rounded-2xl" objectFit="cover" width={100} height={100} alt="dress style3"></Image>
//                      <span className="absolute top-10 left-5 font-bold text-xl">Party</span>
//                      </div>
//                      <div className="bg-[#FFFFFF] w-[400px] h-[200px] m-1 relative"><Image src={"/dressstyle4.png"} className="w-full h-full rounded-2xl" objectFit="cover"  width={100} height={100} alt="dress style14"></Image>
//                      <span className="absolute top-10 left-5 font-bold text-xl">Gym</span>
//                      </div>

                  
//                </div>
           
//             </div>

        
//          </div>
//    )
//  }


  

import Image from "next/image";

export default function Dress(){
    return(
          <div className="w-full h-full mt-8  sm:h-[500px] bg-[#F0F0F0] flex flex-col  justify-start items-center pt-8  max-w-screen-2xl mx-auto">
            {/* top div */}
               <div className="mt-2 ">
                    <h1 className="text-3xl font-bold pl-6 sm:pl-0">BROWSE BY DRESS STYLE</h1>
               </div>
               {/* bottom div */}
               <div className=" w-[90%] h-full sm:h-[600px] mt-5 flex flex-wrap justify-center items-center">
                   <div className="w-[400px] h-[200px] m-1 relative"> 
                       <Image src={"/dressstyle1.png"} className="w-full h-full rounded-[20px]" layout="fill" objectFit="cover"  alt="dreesstyle1"></Image>
                     <span className="absolute top-10 left-5 font-bold text-xl">Casual</span>
                   </div>
                   <div className="w-[600px] h-[200px] m-1 relative">
                   <Image src={"/dressstyle2.png"} className="w-full h-full rounded-[20px]" layout="fill" objectFit="cover" 
                    alt="dreesstyle1"></Image>
                   <span className="absolute top-10 left-5 font-bold text-xl">Formal</span>
                   </div>
                   <div className="w-[600px] h-[200px] m-1 relative">
                   <Image src={"/dressstyle3.png"} className="w-full h-full rounded-[20px]" layout="fill" objectFit="cover"  alt="dreesstyle1"></Image>
                   <span className="absolute top-10 left-5 font-bold text-xl">Party</span>
                   </div>
                   <div className="w-[400px] h-[200px] m-1 relative"> 
                   <Image src={"/dressstyle4.png"} className="w-full h-full rounded-[20px]"layout="fill" objectFit="cover"  alt="dreesstyle1"></Image>
                   <span className="absolute top-10 left-5 font-bold text-xl">Gym</span>
                  </div>
               </div>
          </div>
    )
}