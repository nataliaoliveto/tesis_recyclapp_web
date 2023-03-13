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
  FormErrorMessage,
  Input,
  ModalFooter,
  Stack,
  Button,
} from "@chakra-ui/react";
import { useUploadImage } from "../../hooks/useUploadImage";
import { advertisementsApi, CreateAdvertisement } from "../../services/api.advertisements";
import { useMutation } from "@tanstack/react-query";
import { useForm, Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface ITransactionModal {
  isOpenModal: boolean;
  onCloseModal: () => void;
  duration: string;
  price: string;
}

const advertisementSchema = z
.object({
  title: z.string().min(4, {
    message: "El mínimo del título son 3 caracteres y el máximo 30",
  })
  .max(30, {
    message: "El máximo del título son 30 caracteres",
  })
  .regex(new RegExp(/^[a-zA-Z0-9]{4,30}$/), {
    message: "El título puede incluir sólo letras y números",
  }),
  text: z.string()
  .min(25, {
    message: "El mínimo del texto son 25 caracteres y el máximo 255",
  })
  .max(255, {
    message: "El máximo del texto son 255 caracteres",
  }),
}) 

type ValidationSchema = z.infer<typeof advertisementSchema>;

const resolver: Resolver<FormData> = async (values) => {
  return {
    values: values || {},
    errors: {},
  };
};

export const TransactionModal = ({
  isOpenModal,
  onCloseModal,
  duration,
  price,
}: ITransactionModal) => {
  const { uploadImage, image, handleImageChange, isLoading: isLoadingImage } = useUploadImage({
    subfolder: "Advertisement",
  });

  const durationDays = () => {
    if (duration === "Diaria") return 1;
    if (duration === "Semanal") return 7;
    if (duration === "Mensual") return 28;
    return 0;
  };

  const { mutateAsync, isLoading } = useMutation({
    mutationFn: async (data: CreateAdvertisement) => {
      return await advertisementsApi.createAdvertisement(data).then((res) => res);
    }
  });
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm<ValidationSchema>({
    mode: "all",
    resolver: zodResolver(advertisementSchema),
    resetOptions: {
      keepDirty: true,
      keepDirtyValues: true,
    },
    reValidateMode: "onChange",
  });

  const onSubmit = async (values: any) => {
    console.clear();
    try {
      const res = await mutateAsync({
        userId: "cleeteqqv0000up5soh9k24cs",
        title: values.title,
        text: values.text,
        duration,
      })

      await uploadImage(res.advertisementId);
    } catch (error) {
      console.error(error);
    }
    // reset();
  };

  const handleCloseModal = () => {
    reset();
    onCloseModal();
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
      onClose={onCloseModal}
      isCentered
      scrollBehavior="inside"
    >
      <ModalOverlay />
      {
        <ModalContent as="form" onSubmit={handleSubmit(onSubmit)}>
          {/*AUTOPOPULAR DE CLICK */}

          <ModalHeader>Solicitud de Publicidad {duration}</ModalHeader>
          <ModalCloseButton onClick={() => handleCloseModal()} />
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

            <FormControl isInvalid={errors.title ? true : false}>
              <FormLabel>Título a mostrar en la publicidad</FormLabel>
              <Input
                id="title"
                placeholder="Título de publicidad"
                type="text"
                required 
                {...register("title")}
              />
              <FormErrorMessage>
                {errors.title && errors.title?.message}
              </FormErrorMessage>
            </FormControl>

            <FormControl isInvalid={errors.text ? true : false}>
              <FormLabel>Texto a mostrar en la publicidad</FormLabel>
              <Input
                id="text"
                placeholder="Texto de publicidad"
                type="text"
                required 
                {...register("text")}
              />
              <FormErrorMessage>
                {errors.text && errors.text?.message}
              </FormErrorMessage>
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
                type="submit"
                _hover={{
                  backgroundColor: "green.400",
                  color: "gray.50",
                }}
                isDisabled={!isValid}
                isLoading={isLoading || isLoadingImage}
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
