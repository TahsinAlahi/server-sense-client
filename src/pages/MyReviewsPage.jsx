import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import ReviewDetailCard from "../components/ReviewDetailCard";

function MyReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    async function getMyReviews() {
      setIsLoading(true);
      try {
        const res = await axiosSecure.get("/reviews/my-reviews");
        setReviews([...res.data]);
      } catch (error) {
        console.error("Error fetching services:", error);
      } finally {
        setIsLoading(false);
      }
    }

    getMyReviews();
  }, []);

  return (
    <main className=" min-h-[calc(100svh-72px)] w-full max-w-screen-xl mx-auto flex flex-col items-center justify-center relative font-poppins py-5">
      <h1 className="mx-auto text-3xl font-lora text-center mb-8 md:mb-10 border-black border-b-4 w-fit">
        All Services
      </h1>

      <div className="flex flex-col gap-3">
        {reviews?.map((review, index) => (
          <ReviewDetailCard key={index} review={review} />
        ))}
      </div>
    </main>
  );
}

export default MyReviewsPage;
