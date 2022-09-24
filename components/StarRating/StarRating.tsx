import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import StarRatingComponent from "react-star-rating-component";
import second from "../../styles/star-rate.module.css";

export const StarRating = () => {
  const [value, setValue] = useState(0);

  return (
    <Box
      as={StarRatingComponent}
      starCount={5}
      value={value}
      name="rate2"
      onStarClick={(e: number) => setValue(e)}
      className={second.starRateOpinion}
    />
  );
};
