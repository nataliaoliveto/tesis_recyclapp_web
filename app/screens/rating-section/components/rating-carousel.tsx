"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { RatingCard } from "./rating-card";
import { useRatingsQuery } from "@/hooks/useRatingsQuery";

export const RatingCarousel = () => {
  const { data: ratings } = useRatingsQuery();

  return (
    <Carousel
      opts={{
        align: "center",
        loop: true,
      }}
      className="w-full max-w-5xl mx-auto p-8"
    >
      <CarouselContent className="-ml-2 md:-ml-4 p-12">
        {ratings?.map((ratingCard) => (
          <CarouselItem
            key={ratingCard.id}
            className="pl-4 md:pl-4 md:basis-1/3"
          >
            <RatingCard
              text={ratingCard.text}
              rating={ratingCard.value}
              name={ratingCard.userName}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};
