import React from "react";
import { Stack, Box, Text, Button } from "@chakra-ui/react";

interface IStoreSubscriptionCard {
  titleBgColorSS: string;
  titleSS: string;
  monthlyPrice: string;
  message: string;
}

export const StoreSubscriptionCard = ({
  titleBgColorSS,
  titleSS,
  monthlyPrice,
  message,
}: IStoreSubscriptionCard) => {
  return (
    <Stack
      width={{ base: "full", lg: "400px" }}
      maxH="300px"
      px={4}
      py={4}
      borderRadius="20px"
      h="600px"
      shadow="xl"
    >
      <Box bgColor={titleBgColorSS} borderRadius="full" w="full" p={2}>
        <Text fontSize="20px" fontWeight={600} color="gray.700">
          {titleSS}
        </Text>
      </Box>

      <Stack >
        <Text fontSize="20px" fontWeight={600} color="gray.600" mt={5}>
          Precio mensual
        </Text>
        <Text fontSize="20px" fontWeight={600} color="teal.600" pb={5}>
          AR$ {monthlyPrice}.-
        </Text>
      </Stack>
      <a href="#id-contact">
        <Button
          borderColor={"teal.200"}
          borderStyle="solid"
          borderWidth={"thin"}
          borderRadius="2xl"
          backgroundColor={"gray.50"}
          color="gray.500"
        >
          Solicitar
        </Button>
      </a>
      <Box>
        <Text fontSize="12px" color="gray.400" py={5}>
          {message}
        </Text>
      </Box>
    </Stack>
  );
};
