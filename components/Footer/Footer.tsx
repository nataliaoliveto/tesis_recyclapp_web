import React from "react";
import { Stack, Flex, Box, Text, Image } from "@chakra-ui/react";
import { Section } from "../../components";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <Stack id="id-footer" alignItems="center" color="gray.600">
      <Stack
        py={48}
        direction="row"
        justifyContent="center"
        w="full"
        maxW="900px"
        alignItems="center"
      >
        <Flex flexDirection="column" maxW="400px">
          <Text fontSize="64px" lineHeight={1}>
            Seguinos en las redes
          </Text>
          <Text fontSize="30px" lineHeight={1.3}>
            ¿Querés enterarte de las últimas novedades?
          </Text>
          <Text fontSize="30px" lineHeight={1.3}>
            ¡No te olvides de seguirnos!
          </Text>
        </Flex>
        <Flex position="relative" py={4} px={4} h="350px" w="400px">
          <Box w="100px" h="100px" position="absolute" top={0}>
            <Box
              as="a"
              href="https://www.instagram.com/recyclappok/"
              display="flex"
              flexDir="column"
              alignItems="center"
            >
              <Image
                src="/icons/instagram.png"
                width="64px"
                height="64px"
                alt="Instagram link"
                mb={1}
              />
              <Text>RecyclAppOk</Text>
            </Box>
          </Box>
          <Box
            w="100px"
            h="100px"
            position="absolute"
            marginLeft="auto"
            marginRight="auto"
            right={0}
            left={0}
            bottom={0}
          >
            <Box
              as="a"
              href="https://twitter.com/recyclappok"
              display="flex"
              flexDir="column"
              alignItems="center"
            >
              <Image
                src="/icons/twitter.png"
                width="64px"
                height="64px"
                alt="Twitter link"
                mb={1}
              />
              RecyclAppOk
            </Box>
          </Box>
          <Box w="100px" h="100px" position="absolute" top={"35%"} right={0}>
            <Box
              as="a"
              href="https://www.facebook.com/recyclappok"
              display="flex"
              flexDir="column"
              alignItems="center"
            >
              <Image
                src="/icons/facebook.png"
                width="64px"
                height="64px"
                alt="Facebook link"
                mb={1}
              />
              RecyclAppOk
            </Box>
          </Box>
        </Flex>
      </Stack>
      <Flex
        alignItems="center"
        justifyContent="center"
        py={6}
        style={{ marginTop: 0 }}
        w="full"
        bgColor="green.300"
      >
        <Text textAlign="center">
          RecyclApp © 2022 Todos los derechos reservados | Desarrollado por
          Natalia Oliveto & Rodrigo Toyama
        </Text>
      </Flex>
    </Stack>
  );
};
