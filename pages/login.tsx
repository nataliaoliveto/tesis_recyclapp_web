import React from "react";
import Link from "next/link";
import {
  Box,
  Flex,
  Text,
  Image,
  FormLabel,
  Input,
  Stack,
  Button,
} from "@chakra-ui/react";
import { Section } from "../components";
import { Layout } from "../layout";

type Props = {};

const Login = (props: Props) => {
  return (
    <>
      <Layout>
        <Section id="id-contact" backgroundColor="gray.100">
          <Box display="flex" justifyContent="center" py={4}>
            <Image
              src="/icons/user.png"
              width="128px"
              height="128px"
              alt="headset atención al usuario"
            />
          </Box>
          <Text
            textAlign="center"
            as="h2"
            fontSize="42px"
            color="gray.500"
          ></Text>
          <Box
            w="full"
            display="flex"
            alignItems="center"
            flexDirection="column"
          >
            <Flex
              alignItems="center"
              fontSize="24px"
              maxW="600px"
              flexDirection="column"
              textAlign="center"
              color="gray.500"
              py={8}
            >
              <Text fontSize="20px">Login</Text>
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
                <FormLabel>Usuario</FormLabel>
                <Input />
              </Box>
              <Box>
                <FormLabel>Contraseña</FormLabel>
                <Input />
              </Box>
            </Stack>
            <Link href="/register">Registrarse</Link>
            <Button bgColor="teal.500" color="gray.100" m={5}>
              Login
            </Button>
            <Link href="/">
              <Button
                borderColor={"green.200"}
                borderStyle="solid"
                borderWidth={"thin"}
                borderRadius="2xl"
                backgroundColor={"gray.50"}
                color="gray.500"
              >
                Volver
              </Button>
            </Link>
          </Box>
        </Section>
      </Layout>
    </>
  );
};

export default Login;
