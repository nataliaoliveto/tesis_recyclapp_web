import React from "react";
import { Stack, Box, Text, Image } from "@chakra-ui/react";
import StarRatingComponent from "react-star-rating-component";

import second from "../../styles/star-rate.module.css";

interface IRatingCard {
  text: string;
  rating: number;
  name: string;
}

export const RatingCard = ({ text, rating, name }: IRatingCard) => {
  return (
    <Box
      className="embla__slide"
      w="412px"
      bgColor="gray.50"
      h="600px"
      borderRadius="40px"
      shadow="md"
      color="gray.600"
    >
      <Stack p={8} alignItems="center" justifyContent="space-between" h="full">
        <Box display="flex" flexDir="column" alignItems="center">
          <Box
            as={StarRatingComponent}
            editing={false}
            starCount={5}
            value={rating}
            name="rate1"
            className={second.starrate}
          />
          <Box width={"200px"} h="4px" bgColor="yellow.950" mb={10} />
          <Text textAlign="center" fontSize="28px" mb={10}>
            {text}
          </Text>
        </Box>

        <Stack
          backgroundColor={"green.100"}
          width={350}
          alignItems={"center"}
          justifyContent={"center"}
          h={170}
          borderTopRadius="full"
        >
          <Text
            fontSize="36px"
            fontWeight={600}
            color="gray.500"
            maxW={325}
            maxH={80}
            textAlign="center"
            inlineSize={"225px"}
            overflowWrap={"break-word"}
          >
            {name}
          </Text>
        </Stack>
      </Stack>
    </Box>
  );
};
