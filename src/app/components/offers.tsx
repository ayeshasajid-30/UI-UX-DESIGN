
import { MdOutlineEmail } from "react-icons/md";
export default function Offers() {
    return (
      
        <main className="w-full flex justify-center items-center p-5 max-w-screen-2xl mx-auto">

            <div className="w-full sm:w-[80%] h-full sm:h-[150px] bg-black text-white flex sm:flex-row flex-col justify-center items-center gap-5 p-5 rounded-[20px]">
                {/* Title */}
                <h1 className="text-xl text-center sm:text-4xl font-extrabold w-full">
                    STAY UPTO DATE ABOUT OUR LATEST OFFERS
                </h1>
                
                {/* Input & Button */}
                <div className="flex flex-col sm:flex-col justify-center items-center w-full sm:w-auto gap-3">
                    {/* Email Input */}
                    <div className="flex items-center w-full sm:w-[330px] h-[40px] rounded-[62px] bg-[#F0F0F0]">
                        <MdOutlineEmail className="text-xl ml-2 text-black" />
                        <input
                            placeholder="search item..."
                            className="w-full ml-2 outline-none h-full rounded-[62px] bg-[#F0F0F0] px-2"
                        />
                    </div>

                    {/* Subscribe Button */}
                    <div className="flex justify-center items-center w-full sm:w-[330px] h-[40px] rounded-[62px] bg-[#F0F0F0]">
                        <p className="text-black">Subscribe to Newsletter</p>
                    </div>
                </div>
            </div>
        </main>
    );
}

