import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import ReviewDetailCard from "../components/ReviewDetailCard";
import ConfirmationModal from "../components/ConfirmationModal";
import Loader from "../components/Loader";

function MyReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedReviewId, setSelectedReviewId] = useState(null);
  const axiosSecure = useAxiosSecure();

  async function onDelete() {
    try {
      await axiosSecure.delete(`/reviews/review/${selectedReviewId}`);
      setReviews((prev) =>
        prev.filter((review) => review._id !== selectedReviewId)
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsModalOpen(false);
      setSelectedReviewId(null);
    }
  }

  function onOpen(id) {
    setSelectedReviewId(id);
    setIsModalOpen(true);
  }

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

  if (isLoading) return <Loader />;

  return (
    <main className=" min-h-[calc(100svh-72px)] w-full max-w-screen-xl mx-auto flex flex-col items-center justify-center relative font-poppins py-5">
      <h1 className="mx-auto text-3xl font-lora text-center mb-8 md:mb-10 border-black border-b-4 w-fit">
        All Services
      </h1>

      <div className="flex flex-col gap-3">
        {reviews?.map((review) => (
          <ReviewDetailCard
            key={review._id}
            review={review}
            onDelete={() => onOpen(review._id)}
          />
        ))}
      </div>

      <ConfirmationModal
        isOpen={isModalOpen}
        message="Are you sure you want to delete this review?"
        onConfirm={onDelete}
        onCancel={() => setIsModalOpen(false)}
      />
    </main>
  );
}

export default MyReviewsPage;
