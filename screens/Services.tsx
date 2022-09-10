import React from "react";
import { Stack, Box, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import { Section } from "../components";

type Props = {};

export const Services = (props: Props) => {
  return (
    <>
      <Section id="id-services" backgroundColor="blue.200">
        <Stack
          direction="row"
          justifyContent="center"
          spacing={8}
          alignItems="center"
        >
          <Box w="300px" h="500px" bgColor="yellow.500" />
          <Text as="h2" fontSize="42px">
            Nuestros servicios
          </Text>
        </Stack>
      </Section>
      <Section backgroundColor="blue.600">
        <Stack
          direction="row"
          justifyContent="center"
          spacing={8}
          alignItems="center"
        >
          <Stack direction="row" alignItems="center" bgColor="cyan.400">
            <Stack direction="column" px={4} maxW="600px" bgColor="red.100">
              <Stack direction="row" alignItems="center" bgColor="green.200">
                <Box w="300px" h="500px" bgColor="yellow.500" />
                <Text as="h2" fontSize="32px">
                  Wiki y noticias
                </Text>
              </Stack>
              <Stack maxW="400px">
                <Text>Donde podrás aprender</Text>
                <UnorderedList>
                  <ListItem>
                    Los diferentes tipos de materiales que son reciclables y los
                    que no deben ser tirados como basura orgánica
                  </ListItem>
                  <ListItem>
                    Cómo emplear las técnicas de reciclaje o reutilización
                  </ListItem>
                  <ListItem>Cómo hacer compost en casa</ListItem>
                </UnorderedList>
              </Stack>
            </Stack>
          </Stack>
          <Stack direction="row" alignItems="center" bgColor="cyan.400">
            <Stack direction="column" px={4} maxW="600px" bgColor="red.100">
              <Stack direction="row" alignItems="center" bgColor="green.200">
                <Box w="300px" h="500px" bgColor="yellow.500" />
                <Stack maxW="280px">
                  <Text as="h2" fontSize="32px">
                    Publicidad
                  </Text>
                  <Text fontSize="14px">
                    ¿Tu negocio sigue políticas verdes? Tenemos un espacio
                    exclusivo para vos. Visita nuestros planes de contratación
                    debajo
                  </Text>
                </Stack>
              </Stack>
              <Stack maxW="400px">
                <Text>
                  Noticias de impacto general en el medioambiente y contenido
                  multimedia externo en plataformas de Streaming
                </Text>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Section>
    </>
  );
};
