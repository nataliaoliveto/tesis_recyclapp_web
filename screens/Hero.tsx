import React from "react";
import { Box, Text, Grid, GridItem, Image } from "@chakra-ui/react";
import { Section } from "../components";

type Props = {};

export const Hero = (props: Props) => {
  return (
    <Section id="id-hero" backgroundColor="gray.50">
      <Grid
        templateColumns="repeat(8, 1fr)"
        templateRows="repeat(1, 1fr)"
        gap={"4"}
        h="60vh"
        alignItems="center"
      >
        <GridItem rowSpan={1} colSpan={{ sm: 9, md: 4 }} p="50px">
          <Box display="flex" flexDirection="row">
            <Text
              as="h1"
              textAlign={{ base: "left" }}
              fontSize={{ base: "50px", md: "100px" }}
              textColor="gray.700"
              fontWeight="bold"
              background="papayawhip"
            >
              RecyclApp
            </Text>
            <Image
              src="/icons/leaves.png"
              width={{ base: "64px", md: "128px" }}
              height={{ base: "64px", md: "128px" }}
              alt="hojas icono RecylApp"
            />
          </Box>
          <Text
            textAlign={{ base: "left" }}
            fontSize={{ base: "30px" }}
            textColor="gray.700"
          >
            Más que una red social para unir a quienes cuidamos el medioambiente
          </Text>
        </GridItem>
      </Grid>

      <Box my="100px" display="flex" w="full" justifyContent="flex-end">
        <Box
          display="flex"
          flexDirection={{ base: "column", md: "row" }}
          alignItems="center"
          maxW="900px"
        >
          <Image
            src="/icons/heroCity.png"
            width="256px"
            height="256px"
            alt="mitad ciudad mitad planeta"
          />
          <Box
            display="flex"
            flexDirection="column"
            maxW="800px"
            justifyContent="center"
            alignItems="center"
            p="40px"
          >
            <Text
              textAlign={{ base: "left" }}
              fontSize={{ base: "30px" }}
              textColor="green.600"
              fontWeight="bold"
            >
              ¿Sabías que en la Ciudad de Buenos Aires se generan más de 8 mil
              toneladas de residuos por día?
            </Text>
            <Text
              textAlign={{ base: "left" }}
              fontSize={{ base: "25px" }}
              textColor="gray.700"
            >
              Lamentablemente, sólo se recuperan 300. Uno de los mayores
              problemas es la falta de un espacio centralizado donde aprender e
              interactuar con otras personas sobre el reciclaje
            </Text>
          </Box>
        </Box>
      </Box>

      <Box
        backgroundColor="green.100"
        p="30px"
        borderWidth="1px"
        borderRadius="2xl"
      >
        <Text
          textAlign={{ base: "center" }}
          fontSize={{ base: "24px" }}
          textColor="gray.700"
        >
          Nuestro objetivo principal es que tengan a un click de distancia todas
          las herramientas necesarias para que reciclar sea sencillo y puedan
          incorporarlo en su día a día
        </Text>
      </Box>
    </Section>
  );
};
