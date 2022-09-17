import React from "react";
import { Stack, Box, Center, Text, Image } from "@chakra-ui/react";
import { Section } from "../components";
import { History } from "./History";

type Props = {};

export const About = (props: Props) => {
  return (
    <>
      <Section id="id-about" backgroundColor="gray.50">
        <Center mb={20} mt={150}>
          <Text fontSize="40px" fontWeight={600} color={"green.600"}>
            En RecyclApp pueden aprender
          </Text>
        </Center>
        <Stack
          justifyContent="space-between"
          direction={{ base: "column", lg: "row" }}
          spacing={8}
        >
          <Stack
            borderRadius="10px"
            bgColor="yellow.200"
            alignItems="center"
            h="350px"
            minW="300px"
            spacing={4}
            justifyContent="center"
            p={4}
            shadow="lg"
            fontSize="24px"
          >
            <Image
              src="/icons/recycle.png"
              width="100px"
              height="100px"
              alt="símbolo reciclaje flechas verdes"
            />
            <Text w="200px" textAlign="center">
              Qué <b>materiales</b> reciclar y cómo
            </Text>
          </Stack>
          <Stack
            borderRadius="10px"
            bgColor="yellow.200"
            alignItems="center"
            h="350px"
            minW="300px"
            spacing={4}
            justifyContent="center"
            p={4}
            shadow="lg"
            fontSize="24px"
          >
            <Image
              src="/icons/planetEarth.png"
              width="100px"
              height="100px"
              alt="planeta tierra rodeado de una planta"
            />
            <Text w="200px" textAlign="center">
              Ver <b>dónde se encuentran todos los Puntos Verdes</b> a los que
              pueden ir a alcanzarlos
            </Text>
          </Stack>
          <Stack
            borderRadius="10px"
            bgColor="yellow.200"
            alignItems="center"
            h="350px"
            minW="300px"
            justifyContent="center"
            spacing={4}
            p={4}
            shadow="lg"
            fontSize="24px"
          >
            <Image
              src="/icons/community.png"
              width="100px"
              height="100px"
              alt="iconos de usuarios conectados entre sí"
            />
            <Text w="200px" textAlign="center">
              <b>Conectar con más gente</b> para intercambiar materiales y
              reutilizarlos
            </Text>
          </Stack>
        </Stack>
        <Stack
          direction={{ base: "column", lg: "row" }}
          justifyContent="center"
          py={16}
          fontSize="24px"
        >
          <Center>
            <Image
              src="/icons/notepad.png"
              width="100px"
              height="100px"
              alt="hoja memo"
            />
          </Center>
          <Center pt={50}>
            <Text w="600px" textAlign="center">
              Hay Tiendas con políticas de cuidado ambiental que reutilizarían
              estos materiales llevando{" "}
              <b>el costo de su materia prima a cero</b>
            </Text>
          </Center>
          <Center>
            <Image
              src="/icons/coinGreen.png"
              width="100px"
              height="100px"
              alt="moneda con hojas creciendo de ella"
            />
          </Center>
        </Stack>
      </Section>
      <Stack w="full" bgColor="teal.100" py={8} fontSize="20px">
        <Stack
          direction={{ base: "column", lg: "row" }}
          justifyContent="center"
        >
          <Center>
            <Text w="300px" textAlign="center">
              La <b>materia orgánica</b> también puede ser reducida a través del
              compost para la nutrición de la tierra
            </Text>
          </Center>
          <Center px={8}>
            <Image
              src="/icons/compost.png"
              width="256px"
              height="256px"
              alt="ciclo de tierra y compost"
            />
          </Center>
          <Center>
            <Text w="300px" textAlign="center">
              Te contamos cómo comenzar en este proceso y dónde se encuentran
              las <b>composteras comunitarias</b>
            </Text>
          </Center>
        </Stack>
      </Stack>
      <Stack w="full" bgColor="gray.100" py={6} fontSize="24px" p={100}>
        <Stack
          direction={{ base: "column", lg: "row" }}
          justifyContent="center"
        >
          <Center px={8}>
            <Image
              backgroundSize="cover"
              src="/icons/discount.png"
              width="126px"
              height="126px"
              alt="tarjetas con el símbolo de descuento"
            />
          </Center>
          <Center maxW="600px">
            <Text>
              Para todas las personas comprometidas con las tres R (reducir,
              reutilizar y reciclar) <b>ofrecemos un sistema de puntos</b> que
              van a poder cambiar por descuentos o beneficios en las Tiendas
              adheridas
            </Text>
          </Center>
        </Stack>
      </Stack>

      <Image
        src="/assets/compostHands.jpg"
        alt="tarjetas con el símbolo de descuento"
        objectFit="cover"
        height="600px"
      />

      <History />
    </>
  );
};
