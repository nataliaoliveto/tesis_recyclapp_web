import React from "react";
import { Stack, Box, Text, Image } from "@chakra-ui/react";
import { DonationCardValues } from "./DonationCardValues";

export const DonationCard = () => {
  return (
    <Stack
      minW={{ base: "full", lg: "820px" }}      
      maxW={{ base: "full", lg: "900px" }}
      textAlign="center"
      bgColor="gray.50"
      px={4}
      py={4}
      pb={8}
      minH="330px"
      shadow="lg"
      justifyContent="space-between"
      borderRadius="20px"
      position="relative"
    >
      <Box
        display="flex"
        bgColor="yellow.200"
        w="full"
        borderRadius="full"
        justifyContent="center"
      >
        <Text
          color="gray.600"
          fontSize="28px"
          letterSpacing={4}
          fontWeight={600}
        >
          Donaciones
        </Text>
      </Box>
      <Box display="flex" maxW="730px" alignSelf="center">
        <Text fontSize="22px" fontWeight={600} color="gray.600">
          ¿Te interesa colaborar económicamente con el mantenimiento de la
          aplicación, pero no a través de la publicidad?
        </Text>
      </Box>
      <Box display="flex" maxW="500px" alignSelf="center">
        <Text fontSize="22px" fontWeight={600} color="gray.600">
          ¡Podrás hacerlo a través de donaciones! Estaremos agradecidos con tu
          ayuda
        </Text>
      </Box>

      <Box display="flex" h="2px" w="full" bgColor="yellow.200" />
      
        <Stack
          spacing={6}
          direction={{ base: "column", lg: "row" }}
          textAlign="center"
          p={4}
          borderRadius="24px"
          backgroundColor="gray.50"
          alignItems="center"
        >
          <DonationCardValues donationPrice="100" />
          <DonationCardValues donationPrice="500" />
          <DonationCardValues donationPrice="1.000" />
        </Stack>

      {/* <Box
        display={{ base: "none", md: "flex" }}
        h="65px"
        w="65px"
        position="absolute"
        right={12}
        bottom={12}
      >
        <Image
          src="/icons/happy.png"
          width={"64px"}
          height={"64px"}
          alt="carita feliz"
        />
      </Box> */}
    </Stack>
  );
};