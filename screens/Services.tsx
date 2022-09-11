import React from "react";
import { Stack, Box, Text, UnorderedList, ListItem } from "@chakra-ui/react";
import { Section, AdvertisingPlanCard, DonationCard } from "../components";

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
          direction={{ base: "column", lg: "row" }}
          justifyContent="center"
          spacing={8}
          alignItems={{ base: "center", lg: "flex-start" }}
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
      <Section>
        <Stack justifyContent="center" alignItems="center">
          <Text
            as="h2"
            fontSize="36px"
            fontWeight={600}
            mb={8}
            color="gray.700"
          >
            Planes de publicidad
          </Text>
          <Stack
            spacing={6}
            direction={{ base: "column", lg: "row" }}
            textAlign="center"
          >
            <AdvertisingPlanCard
              titleBgColor="teal.100"
              title="Diaria"
              oneTimePrice="375.-"
              recurringDailyPrice="335.-"
            />
            <AdvertisingPlanCard
              titleBgColor="teal.200"
              title="Semanal"
              oneTimePrice="375.-"
              recurringDailyPrice="335.-"
            />
            <AdvertisingPlanCard
              titleBgColor="teal.300"
              title="Mensual"
              oneTimePrice="375.-"
              recurringDailyPrice="335.-"
            />
          </Stack>
        </Stack>
      </Section>
      <Section>
        <Stack w="full" bgColor="teal.400" alignItems="center">
          <DonationCard />
        </Stack>
      </Section>
      <Section>
        <Stack
          w="full"
          bgColor="teal.400"
          alignItems="center"
          justifyContent="center"
        >
          <Stack maxW="920px" justifyContent="center" alignItems="center">
            <Box display="flex" w="full" justifyContent="center">
              <Box bgColor="green.200" py={2} px={8} borderRadius="full">
                <Text fontSize="32px" fontWeight={600}>
                  Mapas y listados
                </Text>
              </Box>
            </Box>
            <Stack direction={{ base: "column", lg: "row" }} spacing={8}>
              <Box w="300px" h="500px" bgColor="blue" />
              <Stack justifyContent="center" maxW="360px">
                <Box display="flex" flexDirection="column">
                  <Text maxW="260px" fontSize="20px" fontWeight={300}>
                    Podrás ver la ubicación de
                  </Text>
                  <UnorderedList fontSize="20px" fontWeight={300}>
                    <ListItem>Puntos Verdes</ListItem>
                    <ListItem>Composteras Comunitarias</ListItem>
                    <ListItem>Tiendas adheridas</ListItem>
                  </UnorderedList>
                  <Text maxW="240px" fontSize="20px" fontWeight={300}>
                    En dos formatos: a través del mapa o en forma de lista
                  </Text>
                </Box>
                <Box
                  display="flex"
                  justifyContent="flex-end"
                  fontSize="20px"
                  fontWeight={300}
                >
                  <Text textAlign="right" maxW="240px">
                    Podrás usar filtros para ajustar la búsqueda a tus
                    necesidades
                  </Text>
                </Box>
              </Stack>
              <Box w="300px" h="500px" bgColor="red" />
            </Stack>
          </Stack>
        </Stack>
      </Section>
    </>
  );
};
