import React from "react";
import { Stack, Box, Text, Image, Button } from "@chakra-ui/react";
import { Section } from "../components";

type Props = {};

export const Download = (props: Props) => {
  return (
    <Section id="id-download" backgroundColor="yellow.100">
      <Stack
        direction={{ base: "column", lg: "row" }}
        alignItems="center"
        justifyContent="center"
        spacing={12}
      >
        <Image
          src="/assets/mobilePhone.png"
          width="252px"
          height="534px"
          alt="estructura de un celular"
        />

        <Stack h="full" justifyContent="space-between">
          <Box
            display="flex"
            flexDir="column"
            w="420px"
            mb={8}
            textAlign={{ base: "center", lg: "left" }}
          >
            <Text fontWeight={600} fontSize="48px">
              Descarga nuestra aplicación
            </Text>
            <Text fontWeight={600} fontSize="32px">
              Sé parte de esta gran comunidad
            </Text>
          </Box>
          {/* AQUI */}

          {/* a > a */}

          <Box
            as="a"
            href="#id-download"
            display="flex"
            flexDir={{ base: "column", lg: "row" }}
            alignItems="center"
          >
            <Image
              src="/assets/google-play-badge.png"
              width="215px"
              height="84px"
              alt="Google Play badge download"
              mb={1}
            />
          </Box>
        </Stack>
      </Stack>
    </Section>
  );
};
