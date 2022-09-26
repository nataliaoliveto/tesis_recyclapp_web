import React from "react";
import { Stack, Box, Text, Grid, GridItem, Image } from "@chakra-ui/react";
import { Section } from "../components";

type Props = {};

export const History = (props: Props) => {
  return (
    <Section id="id-history" backgroundColor="gray.75">
      <Stack w="full" bgColor="gray.75" py={6} color={"gray.700"}>
        <Stack
          direction="column"
          justifyContent="center"
          alignItems="center"
          spacing={8}
        >
          <Text as="h2" fontSize="48px" fontWeight={600}>
            Nuestra Historia
          </Text>
          <Box width={"400px"} h="8px" bgColor="yellow.300" />

          <Text fontSize="24px" maxW="1000px" textAlign="center">
            El cuidado del medioambiente es un problema que se agrava con el
            paso del tiempo y, ante la falta de acciones,{" "}
            <b>comienza a modificarse el ecosistema en el que vivimos.</b>
          </Text>

          <Box>
            <Stack
              maxW="880px"
              minH="300px"
              bgColor="yellow.200"
              borderRadius="20px"
              direction={{ base: "column", lg: "row" }}
              justifyContent="center"
              alignItems="center"
              spacing={8}
              p={8}
            >
              <Image
                src="/icons/survey.png"
                width="256px"
                height="256px"
                alt="gráfico de barras de estadística"
              />
              <Text maxW="460px" fontSize="24px">
                Hicimos encuestas a decenas de personas que afirmaron querer
                ayudar al planeta pero que no sabían cómo comenzar o les costaba
                cambiar la costumbre de no salir de sus casas para trasladar los
                materiales reciclables
              </Text>
            </Stack>
          </Box>

          <Text maxW="860px" fontSize="24px" textAlign="center">
            De allí nació nuestro objetivo para contribuir a la sociedad con un
            espacio en común en el que dispongan de toda la información
            necesaria para adoptar{" "}
            <b>las tres R (reducir, reutilizar y reciclar)</b> y poder
            interactuar con otras personas e incentivarlas con beneficios por
            sus acciones
          </Text>

          <Image
            src="/icons/tripleR.png"
            width="256px"
            height="256px"
            alt="ciclo de tres R reducir, reutilizar y reciclar"
          />
        </Stack>
        <Stack spacing={6} py={8} px={{ base: "0px", sm: "30px", md: "80px" }}>
          <Grid
            templateColumns={{ base: "repeat(4, 1fr)", lg: "repeat(12, 1fr)" }}
          >
            <GridItem
              colStart={{ base: 3, lg: 9 }}
              colEnd={{ base: 4, lg: 12 }}
            >
              <Text
                fontSize="48px"
                fontWeight={600}
                textAlign="right"
                color="gray.600"
              >
                Misión
              </Text>
            </GridItem>

            <GridItem
              colStart={{ base: 2, lg: 5 }}
              colEnd={{ base: 4, lg: 10 }}
            >
              <Box minW="20px" h="10px" bgColor="green.100" />
              <Text fontSize="24px" textAlign="right">
                Ofrecer un espacio donde las personas interactúen y dispongan de
                todas las herramientas necesarias para aprender. Donde puedan
                colaborar fácilmente sobre el cuidado ambiental y la reducción,
                reutilización y reciclaje de materiales para cuidar el planeta
              </Text>
            </GridItem>
          </Grid>
          <Grid
            templateColumns={{ base: "repeat(4, 1fr)", lg: "repeat(12, 1fr)" }}
          >
            <GridItem colStart={{ base: 2, lg: 2 }} colEnd={{ base: 4, lg: 9 }}>
              <Text fontSize="48px" fontWeight={600} color="gray.600">
                Visión
              </Text>
            </GridItem>

            <GridItem colStart={{ base: 2, lg: 4 }} colEnd={{ base: 4, lg: 9 }}>
              <Box minW="20px" h="10px" bgColor="cyan.100" />
              <Text fontSize="24px" textAlign="left">
                Queremos ser el punto de encuentro preferido para la comunidad y
                acompañarlos día a día en la incorporación de nuevas costumbres
                responsables con el medio ambiente
              </Text>
            </GridItem>
          </Grid>
          <Grid
            templateColumns={{ base: "repeat(4, 1fr)", lg: "repeat(12, 1fr)" }}
          >
            <GridItem
              colStart={{ base: 3, lg: 9 }}
              colEnd={{ base: 4, lg: 12 }}
            >
              <Text
                fontSize="48px"
                fontWeight={600}
                textAlign="right"
                color="gray.600"
              >
                Objetivo
              </Text>
            </GridItem>

            <GridItem
              colStart={{ base: 2, lg: 5 }}
              colEnd={{ base: 4, lg: 10 }}
            >
              <Box minW="20px" h="10px" bgColor="yellow.200" />
              <Text fontSize="24px" textAlign="right">
                A corto plazo buscamos unir en CABA a diferentes recicladores,
                tiendas con políticas de cuidado ambiental y personas que
                quieran aprender en un mismo espacio cómodo y exclusivo para que
                puedan interactuar. Buscamos que las tiendas o interesados en
                hacerse conocer puedan contratar nuestros servicios para
                sostener el funcionamiento de la aplicación
              </Text>
            </GridItem>
          </Grid>
        </Stack>
      </Stack>
    </Section>
  );
};
