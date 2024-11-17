interface IRatingCard {
  text: string;
  rating: number;
  name: string;
}

export const RatingCard = ({ text, rating, name }: IRatingCard) => {
  return (
    <div className="embla__slide relative rounded-lg bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 text-gray-700 h-[400px] border border-gray-100">
      <div className="flex h-full flex-col items-center justify-between">
        <div className="flex flex-col items-center flex-1 w-full">
          <Star rating={rating} maxRating={5} />

          <div className="w-24 h-[2px] my-6 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />

          <p className="text-center text-lg leading-relaxed font-light line-clamp-4 overflow-hidden max-w-[90%]">
            &ldquo;{text}&rdquo;
          </p>
        </div>

        <div className="flex flex-col items-center justify-center w-full pt-6 border-t border-gray-100">
          <p className="text-2xl font-medium text-gray-800 max-w-[325px] text-center w-[225px] break-words line-clamp-2">
            {name}
          </p>
        </div>
      </div>
    </div>
  );
};

const Star = ({
  rating,
  maxRating = 5,
}: {
  rating: number;
  maxRating: number;
}) => {
  return (
    <div className="flex gap-2">
      {[...Array(maxRating)].map((_, index) => (
        <svg
          key={index}
          className={`w-7 h-7 ${
            index < rating ? "text-yellow-400 drop-shadow-sm" : "text-gray-200"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
};
