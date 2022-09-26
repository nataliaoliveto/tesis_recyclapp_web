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

interface ITransactionModal {
  isOpenModal: boolean;
  onCloseModal: () => void;
  cardType: string;
  duration: string;
  price: string;
}

export const TransactionModal = ({
  isOpenModal,
  onCloseModal,
  cardType,
  duration,
  price,
}: ITransactionModal) => {
  const handleCloseModal = () => {
    onCloseModal();
  };

  const durationDays = () => {
    if (duration === "Diaria") return 1;
    if (duration === "Semanal") return 7;
    if (duration === "Mensual") return 30;
    return 0;
  };
  // Formulario y por transferencia con confirmación email

  // ---------------------------------------------------------------

  // Tipo: Publicidad, Donación, Perfil Tienda

  // Valor: $
  // (publicidad (2 tipos por card: unica y recurrente) y tienda son variables fijas, donación es a ingresar)
  // duration: informativo y auto renovación hasta cancelación (2do caso, 1er caso notificación de vencimiento)

  // Generales para transferencia por mail:
  // Ingrese nombre de contacto
  // mail de contacto

  // específicos:
  // Tienda: asociar usuario o perfil
  // Publicidad: nombre a mostrar (empresa puede ser), imagen o publicidad a mostrar (upload validar tamaños)
  // Donacion: nombre para agradecimiento

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

          <ModalHeader>Solicitud de {cardType}</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>
                Valor $
                {/*TIPO DE CLICK: PUBLICIDAD/PERFIL TIENDA ----- DONACIÓN EDITABLE EN NUM*/}
              </FormLabel>
              <Input placeholder={price} disabled={true} value={price}/>
            </FormControl>

            <FormControl>
              <FormLabel>
                Duración en días{" "}
                {/*TIPO DE CLICK: PUBLICIDAD/DONACIÓN/PERFIL TIENDA*/}
              </FormLabel>
              <Input placeholder={duration} disabled={true} value={durationDays()} />
            </FormControl>

            {/*AUTOPOPULAR DE DATOS DE USUARIO*/}
            <FormControl mt={4}>
              <FormLabel>Nombre de contacto </FormLabel>
              <Input placeholder="NombreContacto" disabled={true} />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Mail de contacto </FormLabel>
              <Input placeholder="Mail" disabled={true} />
            </FormControl>

            {/*TIPO DE CLICK: PUBLICIDAD/DONACIÓN/PERFIL TIENDA   ||||||||||||| uno por click*/}
            <FormControl>
              <FormLabel>Usuario {/*TIENDA - AUTOPOPULAR*/}</FormLabel>
              <Input placeholder="Usuario" />
            </FormControl>

            {/*PURO INPUT*/}

            <FormControl>
              <FormLabel>Nombre a mostrar {/*PUBLICIDAD/DONACION*/}</FormLabel>
              <Input placeholder="PublicidadNombre" />
            </FormControl>

            <FormControl>
              <FormLabel>
                Texto a mostrar en publicidad {/*PUBLICIDAD*/}
              </FormLabel>
              <Input placeholder="PublicidadTexto" />
            </FormControl>

            <FormControl>
              <FormLabel>
                Imagen a mostrar en publicidad {/*PUBLICIDAD*/}
              </FormLabel>
              <Input placeholder="PublicidadImagen" type="file" />
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
