import React from "react";
import { Stack, Flex, Box, Text } from "@chakra-ui/react";
import { Section } from "../../components";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <Stack id="id-footer" bgColor="red.600">
      <Stack
        backgroundColor="blue.200"
        py={48}
        direction="row"
        justifyContent="center"
        w="full"
      >
        <Flex bgColor="cyan.300">
          <Text>Seguinos en las redes</Text>
          <Text>
            ¿Querés enterarte de las últimas novedades? ¡No te olvides de
            seguirnos!
          </Text>
        </Flex>
        <Flex bgColor="cyan.600">
          <Text>RecyclAppOk</Text>
          <Text>RecyclAppOk</Text>
          <Text>RecyclAppOk</Text>
        </Flex>
      </Stack>
      <Flex
        alignItems="center"
        justifyContent="center"
        py={6}
        bgColor="yellow.200"
        style={{ marginTop: 0 }}
      >
        <Text textAlign="center">
          RecyclApp © 2022 Todos los derechos reservados | Desarrollado por
          Natalia Oliveto & Rodrigo Toyama
        </Text>
      </Flex>
    </Stack>
  );
};
