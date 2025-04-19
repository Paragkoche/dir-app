import { Tables } from "@/types/db";

interface ReviewProps {
  total_review: number;
  data: Tables<"reviews">[];
}

const formatter = Intl.NumberFormat("en", {
  notation: "compact",
});

const ReviewCard = (props: Tables<"reviews">) => {
  return <div>{props.review}</div>;
};

const Review = (props: ReviewProps) => {
  return (
    <div>
      <div>
        <h1>Reviews ({formatter.format(props.total_review)})</h1>
      </div>
      <div>
        {props.data.map((data, i) => (
          <ReviewCard {...data} key={i} />
        ))}
      </div>
    </div>
  );
};

export default Review;
