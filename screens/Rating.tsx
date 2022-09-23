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
import { Section, RatingCard } from "../components";

export const Rating = () => {
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
          <Text as="h2" fontSize="42px" textAlign="center" mb={10}>
            ¿Qué opinan de RecyclApp?
          </Text>
          <Stack w="full" justifyContent="center" direction="row" spacing={8}>
            <RatingCard />
            <RatingCard />
            <RatingCard />
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
          <Text as="h2" fontSize="42px" textAlign="center" mb={10}>
            ¡Nos interesa tu opinión!
          </Text>
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
              <Box w="full" bgColor="orange.300" h="42px" borderRadius="8px" />
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
