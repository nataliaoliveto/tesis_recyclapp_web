import React from "react";
import { Stack, Box, Text, Image } from "@chakra-ui/react";
import { Section } from "../components";

type Props = {};

export const Download = (props: Props) => {
  return (
    <Section id="id-download" backgroundColor="yellow.200">
      <Stack
        direction="row"
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
          <Box display="flex" flexDir="column" w="420px" mb={8}>
            <Text fontWeight={600} fontSize="48px">
              Descarga nuestra aplicación
            </Text>
            <Text fontWeight={600} fontSize="32px">
              Sé parte de esta gran comunidad
            </Text>
          </Box>

          <Box w="256px" minH="76px" bgColor="blue.200" />
        </Stack>
      </Stack>
    </Section>
  );
};
