import React from "react";
import { Stack, Box, Text, Button } from "@chakra-ui/react";

interface IAdvertisingPlanCard {
  titleBgColor: string;
  title: string;
  oneTimePrice: string;
  recurringDailyPrice: string;
}

export const AdvertisingPlanCard = ({
  titleBgColor,
  title,
  oneTimePrice,
  recurringDailyPrice,
}: IAdvertisingPlanCard) => {
  return (
    <Stack
      px={4}
      py={4}
      borderRadius="20px"
      h="600px"
      justifyContent="space-between"
      shadow="xl"
    >
      <Box bgColor={titleBgColor} borderRadius="full" w="full" py={1}>
        <Text fontSize="28px" fontWeight={600} color="gray.700">
          {title}
        </Text>
      </Box>
      <Stack>
        <Text fontSize="24px" fontWeight={600} color="gray.600">
          Precio de única vez
        </Text>
        <Text fontSize="24px" fontWeight={600} color="teal.600">
          ARS {oneTimePrice}
        </Text>
      </Stack>

      <Box w="full" h="2px" bgColor="teal.200" px={12} />

      <Stack>
        <Text fontSize="24px" fontWeight={600} color="gray.600">
          Precio recurrente por día
        </Text>
        <Text fontSize="24px" fontWeight={600} color="teal.600">
          ARS {recurringDailyPrice}
        </Text>
      </Stack>
      <Box>
        <Text fontSize="20px" color="gray.600" mx={6}>
          Se actualiza el mismo día a la semana siguiente
        </Text>
      </Box>
      <Box >
        <Text fontSize="16px" color="gray.400">
          Duración mínima por 4 períodos
        </Text>
      </Box>
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
    </Stack>
  );
};
