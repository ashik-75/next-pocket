import { StarIcon } from "@heroicons/react/24/solid";
import SectionTitle from "../SectionTitle";
import reviewData from "./reviewData";

function Review({ title, rating, content, name }: any) {
  const ratings = Array.from(Array(rating));
  return (
    <div className="space-y-3 rounded-3xl p-8 shadow-lg shadow-gray-900/5">
      <div className="flex gap-1">
        {ratings.map((arr) => (
          <StarIcon key={arr + 1} className="h-5 w-5 text-cyan-500" />
        ))}
      </div>
      <h3 className="font-bold">{title}</h3>
      <p>{content}</p>

      <pre>- {name}</pre>
    </div>
  );
}
function Reviews() {
  return (
    <section id="reviews" className="py-20 lg:py-28">
      <div className="mx-auto min-h-[600] max-w-7xl space-y-10 px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Everyone is changing their life with Pocket."
          content="Thousands of people have doubled their net-worth in the last 30 days."
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {reviewData.map((review) => (
            <Review key={review.id} {...review} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Reviews;
