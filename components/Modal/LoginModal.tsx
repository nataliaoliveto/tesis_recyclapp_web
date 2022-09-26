import React, { useState } from "react";
import {
  Box,
  Text,
  Link,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  ModalFooter,
  Stack,
  Button,
} from "@chakra-ui/react";

interface ILoginModal {
  isOpenModal: boolean;
  onCloseModal: () => void;
}

export const LoginModal = ({ isOpenModal, onCloseModal }: ILoginModal) => {
  const [register, setRegister] = useState(false);

  const handleCloseModal = () => {
    setRegister(false);
    onCloseModal();
  };

  return (
    <Modal
      isOpen={isOpenModal}
      onClose={handleCloseModal}
      isCentered
      scrollBehavior="inside"
    >
      <ModalOverlay />
      {register ? (
        <ModalContent>
          <ModalHeader>Crear usuario</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Nombre</FormLabel>
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel>Apellido</FormLabel>
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel>Mail</FormLabel>
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel>Teléfono</FormLabel>
              <Input />
            </FormControl>
            <FormControl>
              <FormLabel>Usuario</FormLabel>
              <Input placeholder="Usuario" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Contraseña</FormLabel>
              <Input placeholder="Contraseña" type="password" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Repetir Contraseña</FormLabel>
              <Input placeholder="Contraseña" type="password" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Stack w="full">
              <Button
                bgColor="teal.500"
                color="gray.100"
                borderRadius="2xl"
                _hover={{
                  backgroundColor: "green.400",
                }}
              >
                Crear
              </Button>
              <Button
                onClick={() => setRegister(false)}
                borderColor="teal.200"
                borderStyle="solid"
                borderWidth="thin"
                borderRadius="2xl"
                backgroundColor="gray.50"
                color="gray.500"
              >
                Volver
              </Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      ) : (
        <ModalContent>
          <ModalHeader>Ingresar</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Usuario</FormLabel>
              <Input placeholder="Usuario" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Contraseña</FormLabel>
              <Input placeholder="Contraseña" />
            </FormControl>
          </ModalBody>

          <Box display="flex" px={6} py={3} alignItems="center">
            <Text pr={3}>¿Primera vez ingresando? </Text>
            <Link
              fontSize="sm"
              fontWeight={600}
              _hover={{
                color: "teal.400",
              }}
              onClick={() => setRegister(true)}
            >
              Crear nuevo usuario
            </Link>
          </Box>

          <ModalFooter>
            <Stack w="full">
              <Button
                bgColor="teal.500"
                color="gray.100"
                borderRadius="2xl"
                _hover={{
                  backgroundColor: "green.400",
                  color: "gray.50",
                }}
              >
                Login
              </Button>
              <Button
                borderColor="teal.200"
                borderStyle="solid"
                borderWidth="thin"
                borderRadius="2xl"
                backgroundColor="gray.50"
                color="gray.500"
                onClick={onCloseModal}
              >
                Cancelar
              </Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      )}
    </Modal>
  );
};
