import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ServiceCard({ data }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="bg-[hsl(30,38%,92%)] w-full h-full mx-auto flex items-center justify-center font-poppins"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-full  rounded-lg ">
        {/* Left Side */}
        <div className="w-full h-[350px]">
          <img
            src={data.serviceImage}
            alt={data.serviceTitle}
            className="w-full h-full object-cover object-center "
          />
        </div>

        {/* Right Side */}
        <div className="py-4 px-3 my-auto">
          <p className="text-xs tracking-widest text-black border-black border-b-2 w-fit">
            {data.category}
          </p>
          <h1 className="font-lora text-2xl text-[hsl(212,21%,14%)] leading-tight mt-4 mb-3">
            {data.serviceTitle}
          </h1>
          <p className="text-sm text-black mb-4">{data.description}</p>

          <div className="flex items-center mb-4">
            <h1 className="text-[black] font-poppins text-2xl mr-4">
              ${data.price}
            </h1>
          </div>

          <Link
            to={`/service/${data._id}`}
            className="flex items-center justify-center w-full h-12 text-black hover:text-white hover:bg-black font-bold text-sm rounded-lg transition duration-200 border-black border-2"
          >
            Show Details
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default ServiceCard;
