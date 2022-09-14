import React from "react";
import { Stack, Flex, Box, Text, Image } from "@chakra-ui/react";
import { Section } from "../../components";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <Stack 
      id="id-footer" 
      bgColor="red.600" 
      alignItems="center" 
      color="gray.600" 
      px={4}
      py={4}
    >
      <Stack
        backgroundColor="gray.200"
        py={48}
        direction="row"
        justifyContent="center"
        w="full"
        maxW="900px"
        alignItems="center"
      >
        <Flex bgColor="blue.500" flexDirection="column" maxW="400px">
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
        <Flex
          bgColor="cyan.600"
          position="relative"
          py={4}
          px={4}
          h="350px"
          w="400px"
        >
          <Box
            w="100px"
            h="100px"
            bgColor="red.300"
            position="absolute"
            top={0}
          >
            <a href="https://www.instagram.com/recyclappok/">
              <Image src="/icons/instagram.png" width="64px" height="64px" alt="Instagram link"/>
              <Text>Instagram</Text>
            </a>
          </Box>
          <Box
            w="100px"
            h="100px"
            bgColor="twitter.300"
            position="absolute"
            marginLeft="auto"
            marginRight="auto"
            right={0}
            left={0}
            bottom={0} 
          >
            <a href="https://twitter.com/recyclappok">
              <Image src="/icons/twitter.png" width="64px" height="64px" alt="Twitter link"/>
              Twitter
            </a>
          </Box>
          <Box
            w="100px"
            h="100px"
            bgColor="facebook.300"
            position="absolute"
            top={"35%"}
            right={0}
          >
            <a href="https://www.facebook.com/recyclappok">
              <Image src="/icons/facebook.png" width="64px" height="64px" alt="Facebook link"/>
              Facebook
            </a>
          </Box>
        </Flex>
      </Stack>
      <Flex
        alignItems="center"
        justifyContent="center"
        py={6}
        bgColor="green.100"
        style={{ marginTop: 0 }}
        w="full"
      >
        <Text textAlign="center">
          RecyclApp © 2022 Todos los derechos reservados | Desarrollado por
          Natalia Oliveto & Rodrigo Toyama
        </Text>
      </Flex>
    </Stack>
  );
};
