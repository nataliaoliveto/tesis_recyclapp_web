import React from "react";
import { Section } from "../components";
import { Button } from "@chakra-ui/react";

type Props = {};

export const Login = (props: Props) => {
  return (
    <Section id="id-login" backgroundColor="cyan.200">
      Login

    <Button
        borderColor={"teal.200"}
        borderStyle="solid"
        borderWidth={"thin"}
        borderRadius="2xl"
        backgroundColor={"gray.50"}
        color="gray.500"
    >
        Iniciar sesión
    </Button>

      <a href="#id-contact">
        <Button
          borderColor={"teal.200"}
          borderStyle="solid"
          borderWidth={"thin"}
          borderRadius="2xl"
          backgroundColor={"gray.50"}
          color="gray.500"
        >
          Registrarse
        </Button>
      </a>
      
      <a href="#id-contact">
        <Button
          borderColor={"teal.200"}
          borderStyle="solid"
          borderWidth={"thin"}
          borderRadius="2xl"
          backgroundColor={"gray.50"}
          color="gray.500"
        >
          Olvidé la contraseña
        </Button>
      </a>
      
    </Section>
  );
};
