import { Rating } from "react-simple-star-rating";

function Review({ review }) {
  return (
    <div className="w-full flex flex-col gap-3 border p-1">
      <div className="flex items-center justify-start gap-2">
        <div className="w-10 h-10 rounded-full border border-black">
          <img src={review?.image} alt={review?.name} />
        </div>
        <h1 className="text-lg font-semibold">{review?.name}</h1>
      </div>
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
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam</p>
      </div>
    </div>
  );
}

export default Review;
