import { Rating } from "react-simple-star-rating";
import { MdDelete } from "react-icons/md";
import { IoPencil } from "react-icons/io5";

function ReviewDetailCard({ review, onDelete }) {
  return (
    <div className="w-full flex flex-col gap-3 border p-1">
      <div className="p-2">
        <div className="flex justify-start items-center mb-4">
          <Rating
            initialValue={review?.rating}
            iconsCount={5}
            readonly
            size={25}
            SVGclassName="inline-block"
            allowFraction={true}
          />
          <span className="ml-2 text-gray-600">({review?.rating})</span>
        </div>
        <p>{review?.review}</p>
      </div>
      <div className="flex items-center justify-between text-2xl gap-2">
        <MdDelete
          onClick={onDelete}
          className="bg-red-500 text-white rounded text-2xl p-1 cursor-pointer"
        />
        <IoPencil className="bg-yellow-500 text-black rounded text-2xl p-1 cursor-pointer" />
      </div>
    </div>
  );
}

export default ReviewDetailCard;
