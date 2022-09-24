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
    <Modal isOpen={isOpenModal} onClose={handleCloseModal} isCentered scrollBehavior="inside">
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
              <Button bgColor="teal.500" color="gray.100" borderRadius="2xl">
                Crear
              </Button>
              <Button
                onClick={() => setRegister(false)}
                borderColor="green.200"
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

          <Box display="flex" px={6}>
            <Link
              fontSize="sm"
              fontWeight={600}
              onClick={() => setRegister(true)}
            >
              Crear usuario
            </Link>
          </Box>

          <ModalFooter>
            <Stack w="full">
              <Button bgColor="teal.500" color="gray.100" borderRadius="2xl">
                Login
              </Button>
              <Button
                borderColor="green.200"
                borderStyle="solid"
                borderWidth="thin"
                borderRadius="2xl"
                backgroundColor="gray.50"
                color="gray.500"
                onClick={onCloseModal}
              >
                Cancel
              </Button>
            </Stack>
          </ModalFooter>
        </ModalContent>
      )}
    </Modal>
  );
};
