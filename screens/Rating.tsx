import React from "react";
import {
  Stack,
  Box,
  Text,
  FormLabel,
  Input,
  Textarea,
  Button,
} from "@chakra-ui/react";
import { Section, RatingCard, StarRating } from "../components";
import StarRatingComponent from "react-star-rating-component";
import useEmblaCarousel from "embla-carousel-react";
import second from "../styles/star-rate.module.css";

export const Rating = () => {
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
  ];
  return (
    <>
      <Section id="id-rating" backgroundColor="gray.75">
        <Box
          display="flex"
          justifyContent="center"
          flexDir="column"
          color="gray.700"
          pb={8}
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={8}
          >
            <Text
              as="h2"
              fontSize="42px"
              fontWeight={600}
              color="gray.600"
              textAlign="center"
            >
              ¿Qué opinan de RecyclApp?
            </Text>
            <Box width={"400px"} h="8px" bgColor="yellow.950" />
          </Stack>
          {/* <RatingCarousel /> */}
          <Stack
            w="full"
            justifyContent="center"
            alignItems="center"
            direction={{ base: "column", lg: "row"}}
            spacing={8}
            mt={20}
          >
            {mockCards.map((ratingCard) => (
              <RatingCard
                key={ratingCard.id}
                text={ratingCard.text}
                rating={ratingCard.rating}
                name={ratingCard.name}
              />
            ))}
          </Stack>
        </Box>
      </Section>
      <Section backgroundColor="gray.75">
        <Box
          w="full"
          display="flex"
          alignItems="center"
          flexDirection="column"
          color="gray.600"
        >
          <Stack
            direction="column"
            justifyContent="center"
            alignItems="center"
            spacing={8}
            mb={10}
          >
            <Text
              as="h2"
              fontSize="42px"
              fontWeight={600}
              color="gray.600"
              textAlign="center"
            >
              ¡Nos interesa tu opinión!
            </Text>
            <Box width={"400px"} h="8px" bgColor="orange.200" />
          </Stack>
          <Stack
            px={6}
            py={8}
            borderRadius="40px"
            w="full"
            justifyContent="center"
            bgColor="gray.50"
            direction="column"
            spacing={6}
            maxW="580px"
            mb={10}
            shadow="md"
            color="gray.600"
          >
            <Box>
              <FormLabel>Ingresa tu nombre</FormLabel>
              <Input />
            </Box>
            <Box>
              <FormLabel>Deja tu comentario</FormLabel>
              <Textarea />
            </Box>
            <Box>
              <FormLabel>Valora la app</FormLabel>
              <StarRating />
            </Box>
          </Stack>
          <Button bgColor="orange.300" color="gray.50">
            Enviar opinión
          </Button>
        </Box>
      </Section>
    </>
  );
};

// const RatingCarousel = () => {
//   const [emblaRef] = useEmblaCarousel();

//   const mockCards = [
//     {
//       id: 0,
//       rating: 5,
//       text: "Aprendí mucho con esta app!! Es muy buena para quienes quieren aprender como yo, tiene DE TODO!",
//       name: "Amara",
//     },
//     {
//       id: 1,
//       rating: 4,
//       text: "me gusta y es fácil de usar pero estaría bueno que agreguen más beneficios.",
//       name: "Santi",
//     },
//     {
//       id: 2,
//       rating: 3,
//       text: "en casa la usamos para acompañar a los chicos en la concientización! PLANETA HAY UNO SOLO, CUIDÉMOSLO!!!",
//       name: "Maria",
//     },
//     {
//       id: 3,
//       rating: 4,
//       text: "Recomiendo",
//       name: "Fede",
//     },
//     {
//       id: 4,
//       rating: 5,
//       text: "Muy buena idea!!!!",
//       name: "Malena",
//     },
//     {
//       id: 2,
//       rating: 2,
//       text: "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
//       name: "Gonza",
//     },
//   ];

//   return (
//     <Box className="embla" ref={emblaRef}>
//       <Stack
//         w="full"
//         justifyContent="center"
//         direction="row"
//         spacing={8}
//         mt={20}
//         className="embla__container"
//       >
//         {mockCards.map((ratingCard) => (
//           <RatingCard
//             key={ratingCard.id}
//             text={ratingCard.text}
//             rating={ratingCard.rating}
//             name={ratingCard.name}
//           />
//         ))}
//       </Stack>
//     </Box>
//   );
// };
