import React from "react";
import { Stack, Box, Text } from "@chakra-ui/react";

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
          Precio de unica vez
        </Text>
        <Text fontSize="24px" fontWeight={600} color="teal.600">
          ARS {oneTimePrice}
        </Text>
      </Stack>

      <Box w="full" h="2px" bgColor="teal.200" px={12} />

      <Stack>
        <Text fontSize="24px" fontWeight={600} color="gray.600">
          Precio recurrente por dia
        </Text>
        <Text fontSize="24px" fontWeight={600} color="teal.600">
          ARS {recurringDailyPrice}
        </Text>
      </Stack>
      <Box>
        <Text fontSize="20px" color="gray.600" mx={6}>
          Se actualiza el mismo dia a la semana siguiente
        </Text>
      </Box>
      <Box pb={20}>
        <Text fontSize="16px" color="gray.400">
          Duración mínima por 4 periodos
        </Text>
      </Box>
    </Stack>
  );
};
