import React from "react";
import {
  Stack,
  Box,
  Text,
  UnorderedList,
  ListItem,
  OrderedList,
} from "@chakra-ui/react";
import { Section, AdvertisingPlanCard, DonationCard } from "../components";

type Props = {};

export const Services = (props: Props) => {
  return (
    <>
      <Section id="id-services" backgroundColor="blue.200">
        <Stack
          direction="row"
          justifyContent="center"
          spacing={16}
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
                <Box
                  display="flex"
                  bgColor="yellow.200"
                  px={4}
                  py={2}
                  borderRadius="full"
                >
                  <Text as="h2" fontSize="32px" fontWeight={600}>
                    Wiki y noticias
                  </Text>
                </Box>
              </Stack>
              <Stack maxW="400px" fontSize="24px" pl={2}>
                <Text fontWeight={600}>Donde podrás aprender</Text>
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
              <Stack
                direction="row"
                alignItems="center"
                bgColor="green.200"
                spacing={8}
              >
                <Box w="300px" h="500px" bgColor="yellow.500" />
                <Stack maxW="280px">
                  <Box
                    display="flex"
                    bgColor="blue.200"
                    px={4}
                    py={2}
                    borderRadius="full"
                    justifyContent="center"
                  >
                    <Text
                      as="h2"
                      fontSize="32px"
                      textAlign="center"
                      fontWeight={600}
                    >
                      Publicidad
                    </Text>
                  </Box>
                  <Text fontSize="24px" textAlign="center">
                    ¿Tu negocio sigue políticas verdes? Tenemos un espacio
                    exclusivo para vos. Visita nuestros planes de contratación
                    debajo
                  </Text>
                </Stack>
              </Stack>
              <Stack maxW="400px">
                <Text fontSize="24px">
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
            p={4}
            borderRadius="24px"
            shadow="lg"
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

        <Stack
          pt={8}
          w="full"
          bgColor="blue.200"
          alignItems="center"
          justifyContent="center"
          direction="row"
        >
          <Stack direction="column" justifyContent="center" h="full">
            <Box display="flex" flexDirection="column" maxW="400px">
              <OrderedList>
                <ListItem>
                  Podrás publicar qué materiales ofreces o buscas (o necesitas
                  que trasladen a un Punto Verde)
                </ListItem>
                <ListItem>
                  Otro reciclador confirma que necesita o tiene esos materiales
                </ListItem>
                <ListItem>Arreglan el traslado o encuentro</ListItem>
              </OrderedList>
            </Box>
            <Stack maxW="400px" bgColor="red.200" direction="row" p={8}>
              <Box minW="120px" h="120px" bgColor="blue.100" />
              <Text>
                Si no cuentan con transporte pueden optar por nuestro servicio
                de traslado de materiales
              </Text>
            </Stack>
          </Stack>
          <Stack>
            <Box w="300px" h="500px" bgColor="red.200" />
          </Stack>
          <Stack h="full" spacing={8}>
            <Box display="flex" flexDirection="column">
              <Text>En este menú podrás ver rápidamente:</Text>
              <Text>tus publicaciones activas</Text>
              <Text>las publicaciones aceptadas por ambas partes</Text>
              <Text>todas las publicaciones activas</Text>
            </Box>
            <Box display="flex" flexDirection="column">
              <Text>¡Exclusivo para repartidores!</Text>
            </Box>
          </Stack>
        </Stack>
      </Section>
    </>
  );
};
