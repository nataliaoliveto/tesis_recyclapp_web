import React from "react";
import {
  Box,
  Text,
  Flex,
  Input,
  Textarea,
  Stack,
  FormLabel,
  Button,
  Image,
} from "@chakra-ui/react";
import { Section } from "../components";

type Props = {};

export const Contact = (props: Props) => {
  return (
    <Section id="id-contact" backgroundColor="gray.75">
      <Box display="flex" justifyContent="center" py={4}>
        <Image
          src="/icons/headset.png"
          width="128px"
          height="128px"
          alt="headset atención al usuario"
        />
      </Box>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={8}
        mb={10}
      >
        <Text
          textAlign="center"
          as="h2"
          fontSize="42px"
          fontWeight={600}
          color="gray.600"
        >
          Contacto
        </Text>
        <Box width={"400px"} h="8px" bgColor="cyan.200" />
      </Stack>
      <Box w="full" display="flex" alignItems="center" flexDirection="column">
        <Flex
          alignItems="center"
          fontSize="24px"
          maxW="600px"
          flexDirection="column"
          textAlign="center"
          color="gray.500"
          py={8}
        >
          <Text fontSize="20px">¿Necesitas mayor asistencia?</Text>
          <Text fontSize="20px">
            Dejanos tu consulta y nos pondremos en contacto
          </Text>
        </Flex>
        <Stack
          px={6}
          py={8}
          borderRadius="40px"
          w="full"
          justifyContent="center"
          bgColor="gray.50"
          direction="column"
          spacing={6}
          maxW="580px"
          mb={10}
          shadow="md"
          color="gray.500"
        >
          <Box>
            <FormLabel>Ingresa tu nombre</FormLabel>
            <Input />
          </Box>
          <Box>
            <FormLabel>Mail</FormLabel>
            <Input />
          </Box>
          <Box>
            <FormLabel>¿Cómo podemos ayudarte?</FormLabel>
            <Textarea />
          </Box>
        </Stack>
        <Button bgColor="teal.500" color="gray.100">
          Enviar consulta
        </Button>
      </Box>
    </Section>
  );
};
