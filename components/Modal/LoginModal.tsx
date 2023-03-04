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
  FormErrorMessage,
  Input,
  ModalFooter,
  Stack,
  Button,
  Select,
} from "@chakra-ui/react";
import { usersApi, CreateUser } from "../../services/api.users";
import { useMutation } from "@tanstack/react-query";
import { useForm, Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface ILoginModal {
  isOpenModal: boolean;
  onCloseModal: () => void;
}

interface FormData {
  name: string;
  username: string;
  surname: string;
  mail: string;
  phone: string;
  password: string;
  passwordTwice?: string;
  userType: string;
}

// ! extension Todo Tree
// TODO check validation cuando se clickea
// TODO check ruedita sube y baja números de tel
// TODO handle error from backend when DB issue or restriction

const userSchema = z
  .object({
    name: z
      .string()
      .min(4, {
        message: "El mínimo del nombre son 4 caracteres y el máximo 30",
      })
      .max(30, {
        message: "El máximo del nombre son 30 caracteres",
      })
      .regex(new RegExp(/^[a-zA-Z]{4,30}$/), {
        message: "El nombre puede incluir sólo letras",
      }),
    surname: z
      .string()
      .min(4, {
        message: "El mínimo del apellido son 4 caracteres y el máximo 30",
      })
      .max(30, {
        message: "El máximo del apellido son 30 caracteres",
      })
      .regex(new RegExp(/^[a-zA-Z]{4,30}$/), {
        message: "El nombre puede incluir sólo letras",
      }),
    mail: z.string().email({
      message: "El mail no es válido",
    }),
    phone: z
      .string()
      .min(10, {
        message:
          "El número debe tener 10 caracteres de longitud, exceptuando el +54 9 ya pre establecidos.",
      })
      .max(10, {
        message:
          "El número debe tener 10 caracteres de longitud, exceptuando el +54 9 ya pre establecidos.",
      })
      .regex(new RegExp(/^[0-9]{10,10}$/), {
        message: "El teléfono puede incluir sólo 10 números",
      }),
    username: z
      .string()
      .min(4, {
        message:
          "El mínimo del nombre de usuario son 4 caracteres y el máximo 30",
      })
      .max(30, {
        message: "El máximo del nombre de usuario son 30 caracteres",
      })
      .regex(new RegExp(/^[a-zA-Z0-9]{4,30}$/), {
        message: "El nombre de usuario puede incluir sólo letras y números",
      }),
    password: z
      .string()
      .min(8, {
        message: "El mínimo de la contraseña son 8 caracteres y el máximo 16",
      })
      .max(16, {
        message: "El máximo de la contraseña son 16 caracteres",
      })
      .regex(
        // Regex para validar que la contraseña incluya al menos una mayúscula, una minúscula, un número y un caracter especial
        new RegExp(/^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[^\w\s]).{8,16}$/),
        {
          message:
            "La contraseña debe incluir al menos una mayúscula, una minúscula, un número y un caracter especial",
        }
      ),
    passwordTwice: z.string(),
    userType: z.enum(["CUSTOMER", "TIENDA"]),
  })
  .refine((data) => data.password === data.passwordTwice, {
    message: "Las contraseñas no coinciden",
    path: ["passwordTwice"],
  });

type ValidationSchema = z.infer<typeof userSchema>;

const resolver: Resolver<FormData> = async (values) => {
  return {
    values: values || {},
    errors: {},
  };
};

export const LoginModal = ({ isOpenModal, onCloseModal }: ILoginModal) => {
  const [registerUser, setRegisterUser] = useState(false);
  const { mutate, isLoading } = useMutation((data: CreateUser) =>
    usersApi.createUser(data)
  );
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm<ValidationSchema>({
    mode: "all",
    resolver: zodResolver(userSchema),
  });

  const onSubmit = async (values: any) => {
    await mutate({
      name: values.name,
      username: values.username,
      surname: values.surname,
      mail: values.mail,
      phone: values.phone,
      password: values.password,
      userType: values.userType,
    });

    reset();
  };

  const handleCloseModal = () => {
    setRegisterUser(false);
    reset();
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
      {registerUser ? (
        <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
          <ModalHeader>Crear usuario</ModalHeader>
          <ModalCloseButton onClick={() => handleCloseModal()} />
          <ModalBody pb={6}>
            <FormControl isInvalid={errors.name ? true : false}>
              <FormLabel htmlFor="name">Nombre</FormLabel>
              <Input
                id="name"
                placeholder="Nombre"
                type="text"
                pattern="^[a-zA-Z]{4,30}$"
                required
                {...register("name")}
                onChange={(e) => {
                  if (e.target.value.length > 30) {
                    e.target.value = e.target.value.slice(0, 30);
                  }
                }}
              />
              <FormErrorMessage>
                {errors.name && errors.name?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.surname ? true : false}>
              <FormLabel htmlFor="surname">Apellido</FormLabel>
              <Input
                id="surname"
                placeholder="Apellido"
                type="text"
                pattern="^[a-zA-Z]{4,30}$"
                required
                {...register("surname")}
                onChange={(e) => {
                  if (e.target.value.length > 30) {
                    e.target.value = e.target.value.slice(0, 30);
                  }
                }}
              />
              <FormErrorMessage>
                {errors.surname && errors.surname?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.mail ? true : false}>
              <FormLabel htmlFor="mail">Mail</FormLabel>
              <Input
                id="mail"
                placeholder="mail"
                type="mail"
                required
                {...register("mail")}
              />
              <FormErrorMessage>
                {errors.mail && errors.mail?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.phone ? true : false}>
              <FormLabel htmlFor="phone">Teléfono</FormLabel>
              <Input
                id="phone"
                placeholder="teléfono"
                type="number"
                required
                pattern="[0,9]"
                {...register("phone")}
                onKeyPress={(e) => {
                  if (!/[0-9]/.test(e.key)) {
                    e.preventDefault();
                  }
                }}
                onChange={(e) => {
                  if (e.target.value.length > 10) {
                    e.target.value = e.target.value.slice(0, 10);
                  }
                }}
              />
              <FormErrorMessage>
                {errors.phone && errors.phone?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.password ? true : false}>
              <FormLabel htmlFor="password">Contraseña</FormLabel>
              <Input
                id="password"
                placeholder="Contraseña"
                type="password"
                required
                {...register("password")}
                onChange={(e) => {
                  if (e.target.value.length > 16) {
                    e.target.value = e.target.value.slice(0, 16);
                  }
                }}
              />
              <FormErrorMessage>
                {errors.password && errors.password?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.passwordTwice ? true : false}>
              <FormLabel htmlFor="passwordTwice">Repetir contraseña</FormLabel>
              <Input
                id="passwordTwice"
                placeholder="Repetir contraseña"
                type="password"
                required
                {...register("passwordTwice")}
                onChange={(e) => {
                  if (e.target.value.length > 16) {
                    e.target.value = e.target.value.slice(0, 16);
                  }
                }}
              />
              <FormErrorMessage>
                {errors.passwordTwice && errors.passwordTwice?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.username ? true : false}>
              <FormLabel htmlFor="username">Nombre de usuario</FormLabel>
              <Input
                id="username"
                placeholder="Nombre de usuario"
                type="text"
                pattern="^[a-zA-Z0-9]{4,30}$"
                required
                {...register("username")}
                onChange={(e) => {
                  if (e.target.value.length > 30) {
                    e.target.value = e.target.value.slice(0, 30);
                  }
                }}
              />
              <FormErrorMessage>
                {errors.username && errors.username?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.userType ? true : false}>
              <FormLabel htmlFor="userType">Tipo de usuario</FormLabel>
              <Select
                id="userType"
                defaultValue={"CUSTOMER"}
                {...register("userType", {
                  required: "El tipo de usuario es requerido",
                })}
              >
                <option value="CUSTOMER">General</option>
                <option value="STORE">Tienda</option>
              </Select>
              <FormErrorMessage>
                {errors.userType && errors.userType?.message}
              </FormErrorMessage>
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
                type="submit"
                isLoading={isLoading}
                isDisabled={!isValid}
              >
                Crear
              </Button>
              <Button
                onClick={() => setRegisterUser(false)}
                borderColor="teal.200"
                borderStyle="solid"
                borderWidth="thin"
                borderRadius="2xl"
                backgroundColor="gray.50"
                color="gray.500"
                isDisabled={isLoading}
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
              onClick={() => setRegisterUser(true)}
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
