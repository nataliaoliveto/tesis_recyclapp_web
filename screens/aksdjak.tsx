import React from "react";
import {
  Stack,
  Box,
  Text,
  UnorderedList,
  ListItem,
  Image,
} from "@chakra-ui/react";

type Props = {};

export const Services = (props: Props) => {
  return (
    <>
      <Stack
        mt={20}
        pt={8}
        w="full"
        bgColor="gray.75"
        alignItems="center"
        justifyContent="center"
        direction={{ base: "column", lg: "row" }}
        color="gray.600"
      >
        <Stack direction="column" justifyContent="center" h="full">
          <Box display="flex" w="full" justifyContent="center">
            <Box bgColor="yellow.200" py={2} px={8} borderRadius="full">
              <Text fontSize="32px" fontWeight={600}>
                Publicaciones
              </Text>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            maxW="400px"
            justifyContent="center"
            alignItems="center"
          >
            <Box mt={5} mb={5}></Box>
            <Image
              src="/icons/numberOne.png"
              width="32px"
              height="32px"
              alt="estructura de un celular"
              mb="5"
            />
            <Text fontSize="20px" textAlign="center">
              Podrás publicar qué materiales ofreces o buscas (o necesitas que
              trasladen a un Punto Verde)
            </Text>
            <Image
              src="/icons/numberTwo.png"
              width="32px"
              height="32px"
              alt="estructura de un celular"
              m="5"
            />
            <Text fontSize="20px" textAlign="center">
              Otro reciclador confirma que necesita o tiene esos materiales
            </Text>
            <Image
              src="/icons/numberThree.png"
              width="32px"
              height="32px"
              alt="estructura de un celular"
              m="5"
            />
            <Text fontSize="20px" textAlign="center">
              Arreglan el punto de encuentro
            </Text>
          </Box>
        </Stack>
        <Stack>
          <Image
            src="/assets/mobilePhone.png"
            width="252px"
            height="534px"
            alt="estructura de un celular"
          />
        </Stack>
        <Stack h="full" spacing={8}>
          <Box display="flex" flexDirection="column" m={5}>
            <Text fontSize="20px">En este menú podrás ver rápidamente:</Text>
            <Box width={"350px"} h="4px" bgColor="yellow.200" />
            <UnorderedList>
              <ListItem fontSize="20px">tus publicaciones activas</ListItem>
              <ListItem fontSize="20px">
                las publicaciones aceptadas por ambas partes
              </ListItem>
              <ListItem fontSize="20px">
                todas las publicaciones activas
              </ListItem>
            </UnorderedList>
          </Box>
        </Stack>
      </Stack>
    </>
  );
};
