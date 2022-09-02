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
} from "@chakra-ui/react";
import { Section } from "../components";

type Props = {};

export const Contact = (props: Props) => {
  return (
    <Section id="id-contact" backgroundColor="red.200">
      <Text textAlign="center" as="h2" fontSize="48px">
        Contact👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀
      </Text>
      <Box w="full" display="flex" alignItems="center" flexDirection="column">
        <Flex
          alignItems="center"
          fontSize="24px"
          maxW="600px"
          flexDirection="column"
          textAlign="center"
        >
          <Text>¿Necesitas mayor asistencia?</Text>
          <Text>Dejanos tu consulta y nos pondremos en contacto</Text>
        </Flex>
        <Stack
          p={6}
          borderRadius="10px"
          w="full"
          justifyContent="center"
          bgColor="blue.600"
          direction="column"
          spacing={4}
          maxW="580px"
          mb={10}
          shadow="md"
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
        <Button bgColor="primary.500">Enviar consulta</Button>
      </Box>
    </Section>
  );
};
