import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useParams } from "react-router";
import { Rating } from "react-simple-star-rating";

function ServiceDetailPage() {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [service, setService] = useState(null);

  useEffect(() => {
    async function getServiceDetail() {
      setIsLoading(true);
      try {
        const res = await axiosSecure.get(`/services/service/${id}`);
        setService(res.data);
        console.log(res.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getServiceDetail();
  }, [id]);

  return (
    <main className="max-w-screen-xl  mx-auto min-h-[calc(100vh-72px)] px-5 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full rounded-lg shadow-2xl bg-white/75 border-2 border-purple-800 overflow-hidden">
        {/* Product Image */}
        <div className="w-full">
          <img
            src={service?.serviceImage}
            alt={service?.serviceTitle}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Product Info */}
        <div className="w-full p-6 flex flex-col justify-between">
          <div className="text-left">
            <p className="text-sm text-gray-800 mb-1 border-b-2 border-black w-fit">
              {service?.category}
            </p>
            <h1 className="text-2xl font-bold mb-1">{service?.serviceTitle}</h1>
            <a
              className="text-sm font-medium hover:border-black border-b-2 border-transparent"
              href={service?.website}
            >
              {service?.companyName}
            </a>
            <p className="text-xl font-semibold text-gray-800 my-2">
              ${service?.price}
            </p>
            <div className="flex justify-start items-center mb-4">
              <Rating
                initialValue={4}
                iconsCount={5}
                readonly
                size={25}
                SVGclassName="inline-block"
                allowFraction={true}
              />
              <span className="ml-2 text-gray-600">
                ({service?.reviews.length})
              </span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              {service?.description}
            </p>
          </div>

          <div className="py-3 w-full h-10 bg-red-500"></div>

          {/* <button className="flex items-center px-6 py-2 bg-black text-white rounded-lg hover:bg-white hover:text-black shadow-md transition text-center">
            Add Review
          </button> */}
        </div>
      </div>
    </main>
  );
}

export default ServiceDetailPage;
