import React from "react";
import { Stack, Box, Text } from "@chakra-ui/react";

export const RatingCard = () => {
  return (
    <Box
      w="412px"
      bgColor="gray.50"
      h="540px"
      borderRadius="40px"
      shadow="md"
      color="gray.600"
    >
      <Stack p={8} alignItems="center" justifyContent="space-between" h="full">
        <Box>
          <Box bgColor="red.200" w="full" h="64px" mb={8} />
          <Text textAlign="center" fontSize="28px">
            Aprendí mucho con esta app!! Es muy buena para quienes quieren
            aprender como yo, tiene DE TODO!
          </Text>
        </Box>

        <Stack>
          <Text fontSize="32px" fontWeight={500}>Nombre</Text>
        </Stack>
      </Stack>
    </Box>
  );
};
