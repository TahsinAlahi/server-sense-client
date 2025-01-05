import { Link } from "react-router";

function FeaturedCard({ data }) {
  return (
    <div className="p-2" data-aos="flip-right" data-aos-duration="1500">
      <div className="w-full h-full mx-auto flex items-start flex-col font-poppins bg-slate-300 rounded-lg overflow-hidden shadow-lg hover:shadow-xl">
        {/* Image Wrapper */}
        <div className="relative w-full h-48 overflow-hidden">
          <img
            className="w-full h-full object-cover object-center transform transition-all duration-1000 ease-linear hover:scale-125 rounded-t-lg"
            src={data?.serviceImage}
            alt={data?.serviceTitle}
          />
        </div>

        {/* Text Box */}
        <div className="px-5 py-4 flex-1">
          <h1 className="font-lato text-3xl font-medium leading-none mb-2">
            {data?.serviceTitle}
          </h1>
          <div className="w-1/6 h-1 bg-black mb-2" />
          <div className=" mt-3">
            <span className="font-semibold text-lg">Description:</span>{" "}
            <span>{data?.description}</span>
          </div>
        </div>

        {/* Button */}
        <div className="px-5 py-2 block mb-3">
          <Link
            to={`/service/${data?._id}`}
            className="inline-block px-4 py-2 text-sm font-bold text-black bg-gray-100 rounded-xl hover:bg-gray-300 transition-all duration-200 ease-linear"
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCard;
