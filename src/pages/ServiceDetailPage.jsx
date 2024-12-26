import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useParams } from "react-router";
import { Rating } from "react-simple-star-rating";
import { useForm } from "react-hook-form";

function ServiceDetailPage() {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [service, setService] = useState(null);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission
  };

  return (
    <main className="max-w-screen-xl  mx-auto min-h-[calc(100vh-72px)] px-5 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 w-full rounded-lg shadow-2xl bg-white/75">
        <div className="w-full">
          <img
            src={service?.serviceImage}
            alt={service?.serviceTitle}
            className="h-full w-full object-cover object-center max-h-[400px]"
          />
        </div>

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

          <div className="bg-white w-full mt-16 py-4 space-y-3 md:px-0 px-3 rounded-md">
            <h1 className="text-xl font-semibold font-lora text-left border-b-2 w-fit border-black">
              Add a Review
            </h1>

            <form
              className="lg:w-3/4 md:w-5/6 ml-0 grid grid-cols-1 gap-2 text-primary"
              onSubmit={handleSubmit(onSubmit)}
            >
              <div className="space-y-2">
                <label htmlFor="rating" className="text-lg">
                  Rating (1-5):
                </label>
                <input
                  {...register("rating", {
                    required: "Rating is required",
                    min: {
                      value: 1,
                      message: "Rating must be at least 1",
                    },
                    max: {
                      value: 5,
                      message: "Rating must be at most 5",
                    },
                  })}
                  type="number"
                  id="rating"
                  className="w-full bg-slate-200 border border-black/40 text-black outline-none px-3 py-2 rounded"
                  placeholder="Enter rating"
                />
                {errors.rating && (
                  <p className="text-red-600">{errors.rating.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="review" className="text-lg">
                  Review:
                </label>
                <textarea
                  {...register("review", {
                    required: "Review is required",
                    minLength: {
                      value: 20,
                      message: "Review must be at least 20 characters long",
                    },
                  })}
                  id="review"
                  className="w-full bg-slate-200 text-black border border-black/40 outline-none px-3 py-2 rounded"
                  placeholder="Write your review"
                  rows={4}
                ></textarea>
                {errors.review && (
                  <p className="text-red-600">{errors.review.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="px-4 py-2 mt-3 bg-btn-bg dark:bg-purple-800 text-white text-xl font-semibold rounded-sm"
              >
                Add Review
              </button>
            </form>
          </div>

          {/* <button className="flex items-center px-6 py-2 bg-black text-white rounded-lg hover:bg-white hover:text-black shadow-md transition text-center">
            Add Review
          </button> */}
        </div>
      </div>
    </main>
  );
}

export default ServiceDetailPage;
