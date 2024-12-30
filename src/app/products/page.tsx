import Image from "next/image";
import { FaStar } from "react-icons/fa";

interface Iproducts {
  id: number;
  title: string;
  price: string;
  old_price?: string;
  img_url: string;
}

const products: Iproducts[] = [
  {
    id: 1,
    title: "T-SHIRT WITH TAPE DETAILS",
    price: "$120",
    img_url: "/product1.png",
  },
  {
    id: 2,
    title: "SKINNY FIT JEANS",
    price: "$240",
    old_price: "$260",
    img_url: "/product2.png",
  },
  {
    id: 3,
    title: "CHECKERED SHIRT",
    price: "$180",
    img_url: "/product3.png",
  },
  {
    id: 4,
    title: "SLEEVE STRIPED T-SHIRT",
    price: "$130",
    old_price: "$160",
    img_url: "/product4.png",
  },
];

export default function Products() {
  return (
    <div className="w-full min-h-[500px] py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        NEW ARRIVALS
      </h1>
      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4 justify-items-center">
        {products.map((data) => (
          <div
            key={data.id}
            className="product-card flex flex-col items-center w-[200px] sm:w-[220px] md:w-[240px]"
          >
            {/* Image Container */}
            <div className="h-[230px] w-full bg-[#F0EEED] rounded-[20px] overflow-hidden">
              <Image
                src={data.img_url}
                alt={data.title}
                className="w-full h-full object-cover"
                width={200} // Adjusted width for the image
                height={230}
              />
            </div>

            {/* Product Details Outside Background */}
            <div className="mt-4 text-center">
              <p className="font-semibold text-lg md:text-xl">{data.title}</p>
              <p className="flex justify-center text-yellow-500 mt-2">
                {Array(4)
                  .fill(0)
                  .map((_, index) => (
                    <FaStar key={index} />
                  ))}
              </p>
              <div className="flex items-center justify-center gap-2 mt-2">
                {/* Current Price */}
                <p className="text-xl font-bold">{data.price}</p>
                {/* Old Price (if available) */}
                {data.old_price && (
                  <p className="text-gray-400 font-semibold line-through">
                    {data.old_price}
                  </p>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}






  
 