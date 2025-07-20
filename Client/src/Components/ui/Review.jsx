import { useState } from "react";

const ReviewsSection = () => {
  const [rating, setRating] = useState(0);

  const handleRating = (value) => {
    setRating(value);
  };

  return (
    <div className="my-8 container mx-auto">
      <h1 className="text-4xl font-bold text-primary">
              Reviews (1)
      </h1>

      {/* Review Section */}
      <div className="mt-6">
        <h2 className="text-lg font-bold">1 review for Gym Equipment</h2>
        {/* Single Review */}
        <div className="mt-4 p-4 border border-gray-200 rounded-lg">
          <div className="flex items-center">
            <img
              src="https://via.placeholder.com/50"
              alt="Reviewer avatar"
              className="w-12 h-12 rounded-full mr-4"
            />
            <div>
              <p className="font-bold">Admin</p>
              <p className="text-sm text-gray-500">May 10, 2022</p>
            </div>
          </div>
          <div className="mt-2">
            <p>Average</p>
            <div className="flex mt-1 text-yellow-400">★★★☆☆</div>
          </div>
        </div>

        {/* Add a Review Form */}
        <div className="mt-6">
          <h3 className="text-lg font-bold">Add a review</h3>
          <p className="text-sm text-gray-500">
            Your email address will not be published. Required fields are
            marked *
          </p>
          <form className="mt-4 space-y-4">
            {/* Rating */}
            <div>
              <label className="block text-sm font-medium">Your rating *</label>
              <div className="flex space-x-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={`cursor-pointer ${
                      star <= rating ? "text-yellow-400" : "text-gray-300"
                    }`}
                    onClick={() => handleRating(star)}
                  >
                    ★
                  </span>
                ))}
              </div>
            </div>
            {/* Review Text */}
            <div>
              <label className="block text-sm font-medium" htmlFor="review">
                Your review *
              </label>
              <textarea
                id="review"
                rows="4"
                className="w-full p-2 border border-gray-300 rounded-lg"
              ></textarea>
            </div>
            {/* Name and Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium" htmlFor="name">
                  Name *
                </label>
                <input
                  id="name"
                  type="text"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm font-medium" htmlFor="email">
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
              </div>
            </div>
            {/* Checkbox */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="save-info"
                className="w-4 h-4 border-gray-300 rounded"
              />
              <label htmlFor="save-info" className="ml-2 text-sm">
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="px-4 py-2 bg-red-500 text-white font-medium rounded-lg hover:bg-red-600"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReviewsSection;
