import React from "react";
import { Box, Text, Grid, GridItem, Image } from "@chakra-ui/react";
import { Section } from "../components";

type Props = {};

export const Hero = (props: Props) => {
  return (
    <Section id="id-hero" backgroundColor="#fafafa">
      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem rowSpan={2} colSpan={2} p="50px">
          <Text
            as="h1"
            textAlign={{ base: "left" }}
            fontSize={{ base: "50px" }}
            textColor="gray.700"
            fontWeight="bold"
            background="papayawhip"
          >
            RecyclApp
          </Text>
          <Text
            textAlign={{ base: "left" }}
            fontSize={{ base: "30px" }}
            textColor="gray.700"
          >
            Más que una red social para unir a quienes cuidamos el medioambiente
          </Text>
        </GridItem>
      </Grid>

      {/* ejemplo grid*/}
{/* 
      <Grid templateColumns="repeat(5, 1fr)" >
        <GridItem
            rowSpan={2}
            colStart={2}
            colEnd={4}
            backgroundColor="tomato"            
            my="100px"
            p="20px"
          >
            soy una foto
        </GridItem>
        <GridItem
          rowSpan={2}
          colStart={4}
          colEnd={6}
          backgroundColor="teal"
          my="100px"
          p="20px"
        >
          <Text
            textAlign={{ base: "left" }}
            fontSize={{ base: "30px" }}
            textColor="green.500"
            fontWeight="bold"
            
          >
            ¿Sabías que en la Ciudad de Buenos Aires se generan más de 8 mil
            toneladas de residuos por día?
          </Text>
          <Text
            textAlign={{ base: "left" }}
            fontSize={{ base: "30px" }}
            textColor="gray.700"
          >
            Lamentablemente, sólo se recuperan 300. Uno de los mayores problemas
            es la falta de un espacio centralizado donde aprender e interactuar
            con otras personas sobre el reciclaje
          </Text>
        </GridItem>
      </Grid> */}

      {/* ejemplo flex */}
      {/* Flex col
        Img
        Flex row
          Text
          Text
        Flex
      Flex */}

      <Box my="100px" display="flex" w="full" justifyContent="flex-end">
        <Box display="flex" alignItems="center" maxW="900px">
        <Image src="/icons/heroCity.png" width="256px" height="256px" alt="mitad ciudad mitad planeta"/>
          <Box display="flex" flexDirection="column" maxW="800px" justifyContent="center" alignItems="center" p="40px">
            <Text
              textAlign={{ base: "left" }}
              fontSize={{ base: "30px" }}
              textColor="green.500"
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
              Lamentablemente, sólo se recuperan 300. Uno de los mayores problemas
              es la falta de un espacio centralizado donde aprender e interactuar
              con otras personas sobre el reciclaje
            </Text>
          </Box>
        </Box>
      </Box>

      <Box backgroundColor="#c5ebc5" p="30px" borderWidth="1px" borderRadius="2xl" >
        <Text textAlign={{ base: "center" }} fontSize={{ base: "30px" }}>
          Nuestro objetivo principal es que tengan a un click de distancia todas
          las herramientas necesarias para que reciclar sea sencillo y puedan
          incorporarlo en su día a día
        </Text>
      </Box>
    </Section>
  );
};
