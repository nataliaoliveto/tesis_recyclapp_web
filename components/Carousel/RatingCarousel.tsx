import React from "react";
import { Stack } from "@chakra-ui/react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { RatingCard } from "../Card";

import "@splidejs/react-splide/css";

export const RatingCarousel = () => {
  const mockCards = [
    {
      id: 0,
      rating: 5,
      text: "Aprendí mucho con esta app!! Es muy buena para quienes quieren aprender como yo, tiene DE TODO!",
      name: "ALEJANDRO DEL MONTE",
    },
    {
      id: 1,
      rating: 4,
      text: "me gusta y es fácil de usar pero estaría bueno que agreguen más beneficios.",
      name: "Santi",
    },
    {
      id: 2,
      rating: 3,
      text: "en casa la usamos para acompañar a los chicos en la concientización! PLANETA HAY UNO SOLO, CUIDÉMOSLO!!!",
      name: "Maria",
    },
    {
      id: 3,
      rating: 3,
      text: "en casa la usamos para acompañar a los chicos en la concientización! PLANETA HAY UNO SOLO, CUIDÉMOSLO!!!",
      name: "Maria",
    },
    {
      id: 4,
      rating: 3,
      text: "en casa la usamos para acompañar a los chicos en la concientización! PLANETA HAY UNO SOLO, CUIDÉMOSLO!!!",
      name: "Maria",
    },
  ];

  return (
    <Splide
      options={{
        type: "loop",
        perPage: 3,
        focus: "center",
        gap: "1em",
        fixedWidth: "412px",
        arrows: true,
      }}
    >
      {mockCards.map((ratingCard) => (
        <SplideSlide key={ratingCard.id}>
          <RatingCard
            text={ratingCard.text}
            rating={ratingCard.rating}
            name={ratingCard.name}
          />
        </SplideSlide>
      ))}
    </Splide>
  );
};
