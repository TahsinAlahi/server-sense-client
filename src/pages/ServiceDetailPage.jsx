import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useParams } from "react-router";
import { Rating } from "react-simple-star-rating";
import { useForm } from "react-hook-form";
import Review from "../components/Review";

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

  let avgRating = 0;

  if (Array.isArray(service?.reviews) && service?.reviews?.length > 0) {
    avgRating =
      service.reviews.reduce((sum, curr) => sum + curr.rating, 0) /
      service.reviews.length;
    console.log(avgRating);
  }

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
                initialValue={avgRating.toFixed(2)}
                iconsCount={5}
                readonly
                size={25}
                SVGclassName="inline-block"
                allowFraction={true}
              />
              <span className="ml-2 text-gray-600">({avgRating})</span>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">
              {service?.description}
            </p>
          </div>

          <div>
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
                  className="px-6 py-2 bg-white text-black rounded-lg hover:bg-black hover:text-white shadow-md transition duration-200 text-center border border-black font-semibold"
                >
                  Add Review
                </button>
              </form>
            </div>

            <div className="bg-white w-full mt-3 py-4 space-y-3 md:px-0 px-3 rounded-md">
              <h1 className="text-xl font-semibold font-lora text-left border-b-2 w-fit border-black">
                Reviews
              </h1>
              <div className="flex w-full flex-col gap-3">
                {service?.reviews.map((review) => (
                  <Review key={review._id} review={review} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ServiceDetailPage;
