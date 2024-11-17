import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { RatingCard } from "./rating-card";

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
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto p-8"
    >
      <CarouselContent className="-ml-2 md:-ml-4 p-12">
        {mockCards.map((ratingCard) => (
          <CarouselItem
            key={ratingCard.id}
            className="pl-4 md:pl-4 md:basis-1/3"
          >
            <RatingCard
              text={ratingCard.text}
              rating={ratingCard.rating}
              name={ratingCard.name}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
