import Rating from "@material-ui/lab/Rating";
import React from "react";

const RatingColumn = (props) => {
  const { feedback } = props;

  return <Rating name="read-only" value={feedback.rating} readOnly />;
};
export default RatingColumn;
