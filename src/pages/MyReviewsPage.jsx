import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import ReviewDetailCard from "../components/ReviewDetailCard";
import ConfirmationModal from "../components/ConfirmationModal";
import Loader from "../components/Loader";
import UpdateReviewModal from "../components/UpdateReviewModal";

function MyReviewsPage() {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isUpdateModalOpen, setIsUpdateModalOpen] = useState(false);
  const [selectedReviewId, setSelectedReviewId] = useState(null);
  const [selectedReview, setSelectedReview] = useState(null);
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
      setIsDeleteModalOpen(false);
      setSelectedReviewId(null);
    }
  }

  function onOpenDeleteModal(id) {
    setSelectedReviewId(id);
    setIsDeleteModalOpen(true);
  }

  function onOpenUpdateModal(review) {
    console.log(review);
    setSelectedReview(review);
    setIsUpdateModalOpen(true);
  }

  async function onSaveUpdatedReview(updatedReview) {
    console.log(updatedReview);
    try {
      const res = await axiosSecure.patch(
        `/reviews/review/${updatedReview._id}`,
        { rating: updatedReview.rating, review: updatedReview.reviewText }
      );
      setReviews((prev) =>
        prev.map((review) =>
          review._id === updatedReview._id ? res.data : review
        )
      );
    } catch (error) {
      console.log(error);
    } finally {
      setIsUpdateModalOpen(false);
    }
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
    <main className="min-h-[calc(100svh-72px)] w-full max-w-screen-xl mx-auto flex flex-col items-center justify-center relative font-poppins py-5">
      <h1 className="mx-auto text-3xl font-lora text-center mb-8 md:mb-10 border-black border-b-4 w-fit">
        All Reviews
      </h1>

      <div className="flex flex-1 flex-col gap-3">
        {reviews?.map((review) => (
          <ReviewDetailCard
            key={review._id}
            review={review}
            onDelete={() => onOpenDeleteModal(review._id)}
            onEdit={() => onOpenUpdateModal(review)}
          />
        ))}
      </div>

      <ConfirmationModal
        isOpen={isDeleteModalOpen}
        message="Are you sure you want to delete this review?"
        onConfirm={onDelete}
        onCancel={() => setIsDeleteModalOpen(false)}
      />

      <UpdateReviewModal
        isOpen={isUpdateModalOpen}
        review={selectedReview}
        onSave={onSaveUpdatedReview}
        onClose={() => setIsUpdateModalOpen(false)}
      />
    </main>
  );
}

export default MyReviewsPage;
