import React, { useState } from "react";
import {
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
import axios from "axios";
import { useUploadImage } from "../../hooks/useUploadImage";

interface ITransactionModal {
  isOpenModal: boolean;
  onCloseModal: () => void;
  duration: string;
  price: string;
}

const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "userId":
      return { ...state, userId: action.payload };
    case "title":
      return { ...state, title: action.payload };
    case "text":
      return { ...state, text: action.payload };
    default:
      return state;
  }
};

export const TransactionModal = ({
  isOpenModal,
  onCloseModal,
  duration,
  price,
}: ITransactionModal) => {
  const { uploadImage, image, handleImageChange } = useUploadImage({
    subfolder: "Advertisement",
  });

  // const pepe = useUploadImage({
  //   subfolder: "Advertisement",
  // });

  // pepe.uploadImage
  // pepe.image
  // pepe.handleImageChange

  const [formValues, dispatch] = React.useReducer(reducer, {
    userId: "cle0gegsm0000v8dwm58hlynv",
    title: "titulin",
    text: "textin",
    duration,
  });

  const handleCloseModal = () => {
    onCloseModal();
  };

  const handleChangeForm = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: event.target.name, payload: event.target.value });
  };

  const durationDays = () => {
    if (duration === "Diaria") return 1;
    if (duration === "Semanal") return 7;
    if (duration === "Mensual") return 28;
    return 0;
  };

  const submitData = async () => {
    if (!image) return;

    try {
      const res = await axios.post(
        "http://localhost:5000/api/advertisement",
        formValues,
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Content-Type": "application/json",
          },
        }
      );

      await uploadImage(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Formulario y por transferencia con confirmación email

  // ---------------------------------------------------------------

  // Tipo: Publicidad, Donación, Perfil Tienda

  // Valor: $
  // (publicidad y tienda son variables fijas, donación es fija)
  // duration: informativo y auto renovación hasta notificación de vencimiento

  // Generales para transferencia por mail, se toman datos precargados del usuario:
  // Ingrese nombre de contacto
  // mail de contacto

  // específicos:
  // Tienda: asociar mail/nombre/cant beneficios
  // Publicidad: asociar mail/nombre/nombre a mostrar, pedir: titulo, texto e imagen
  // Donacion: si logueado: asociar mail/nombre, pedir: nombre para mostrar en agradecimiento (precargar ANÓNIMO) / pedir: mail/nombre si no está logueado

  return (
    <Modal
      isOpen={isOpenModal}
      onClose={handleCloseModal}
      isCentered
      scrollBehavior="inside"
    >
      <ModalOverlay />
      {
        <ModalContent>
          {/*AUTOPOPULAR DE CLICK */}

          <ModalHeader>Solicitud de Publicidad {duration}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel fontSize="20px" fontWeight={400} color="cyan.800">
                Valor $
                {/*TIPO DE CLICK: PUBLICIDAD/PERFIL TIENDA ----- DONACIÓN EDITABLE EN NUM*/}
              </FormLabel>
              <Input placeholder={price} disabled={true} value={price} />
            </FormControl>

            <FormControl>
              <FormLabel fontSize="20px" fontWeight={400} color="cyan.800">
                Duración en días{" "}
                {/*TIPO DE CLICK: PUBLICIDAD/DONACIÓN/PERFIL TIENDA*/}
              </FormLabel>
              <Input
                placeholder={duration}
                disabled={true}
                value={durationDays()}
              />
            </FormControl>

            {/*AUTOPOPULAR DE DATOS DE USUARIO*/}
            <FormControl mt={4}>
              <FormLabel fontSize="20px" fontWeight={400} color="cyan.800">
                Nombre de contacto{" "}
              </FormLabel>
              <Input placeholder="NombreContacto" disabled={true} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel fontSize="20px" fontWeight={400} color="cyan.800">
                Mail de contacto{" "}
              </FormLabel>
              <Input placeholder="Mail" disabled={true} />
            </FormControl>

            {/*PURO INPUT*/}

            <FormControl>
              <FormLabel>Título a mostrar en la publicidad</FormLabel>
              <Input
                placeholder="Título de publicidad"
                maxLength={30}
                name="title"
                value={formValues.title}
                onChange={handleChangeForm}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Texto a mostrar en la publicidad</FormLabel>
              <Input
                placeholder="Texto de publicidad"
                maxLength={255}
                name="text"
                value={formValues.text}
                onChange={handleChangeForm}
              />
            </FormControl>

            <FormControl>
              <FormLabel>Imagen a mostrar en la publicidad</FormLabel>
              <Input
                placeholder="Imagen de publicidad"
                type="file"
                accept=".jpg, .png, .gif, .jpeg"
                onChange={handleImageChange}
              />
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
                  color: "gray.50",
                }}
                onClick={() => submitData()}
              >
                Enviar solicitud
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
      }
    </Modal>
  );
};
