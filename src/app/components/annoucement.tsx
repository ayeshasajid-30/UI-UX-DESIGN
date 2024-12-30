import { FaPlus } from "react-icons/fa";

export default function Announcement() {
    return (
        <main className="bg-black h-[38px] w-full flex justify-center items-center relative max-w-screen-2xl mx-auto">
            <div className="flex justify-center items-center">
                <h3 className="text-white text-xs sm:text-sm">
                    Sign up and get 20% off your first order.
                </h3>
                <button className="text-white ml-3 text-xs sm:text-sm">
                    Sign Up Now
                </button>
            </div>
            <FaPlus className="text-white absolute right-[50px] hidden sm:block" />
        </main>
    )};