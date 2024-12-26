import { useState } from "react";
import { useForm } from "react-hook-form";

function UpdateReviewModal({ isOpen, review, onSave, onClose }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      rating: review?.rating || "", // Default to empty string if review is null
      reviewText: review?.reviewText || "",
    },
  });

  const onSubmit = async (data) => {
    await onSave({ ...data, _id: review._id });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-lg">
        <h2 className="text-2xl font-semibold mb-4">Update Review</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Rating
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
              className="mt-1 px-4 py-2 border rounded-md w-full"
              placeholder="Enter rating (1-5)"
            />
            {errors.rating && (
              <p className="text-red-600">{errors.rating.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Review Text
            </label>
            <textarea
              {...register("reviewText", {
                required: "Review text is required",
                minLength: {
                  value: 10,
                  message: "Review text must be at least 10 characters long",
                },
              })}
              rows={4}
              className="mt-1 px-4 py-2 border rounded-md w-full"
              placeholder="Enter your review"
            />
            {errors.reviewText && (
              <p className="text-red-600">{errors.reviewText.message}</p>
            )}
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UpdateReviewModal;
