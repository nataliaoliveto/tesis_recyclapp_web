import React from "react";
import {
  Stack,
  Box,
  Text,
  Button,
  useDisclosure,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { TransactionModal } from "../Modal";

interface IStoreSubscriptionCard {
  titleBgColorSS: string;
  titleSS: string;
  monthlyPrice: string;
  message: string;
}

export const StoreSubscriptionCard = ({
  titleBgColorSS,
  titleSS,
  monthlyPrice,
  message,
}: IStoreSubscriptionCard) => {
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();
  return (
    <Stack
      width={{ base: "full", lg: "400px" }}
      maxH="300px"
      px={4}
      py={4}
      borderRadius="20px"
      h="600px"
      shadow="xl"
    >
      <Box bgColor={titleBgColorSS} borderRadius="full" w="full" p={2}>
        <Text fontSize="20px" fontWeight={600} color="gray.700">
          {titleSS}
        </Text>
      </Box>

      <Stack>
        <Text fontSize="20px" fontWeight={600} color="gray.600" mt={5}>
          Precio mensual
        </Text>
        <Text fontSize="20px" fontWeight={600} color="teal.600" pb={5}>
          AR$ {monthlyPrice}.-
        </Text>
      </Stack>
      <ChakraLink
        onClick={onOpenModal}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Button
          borderColor={"teal.200"}
          borderStyle="solid"
          borderWidth={"thin"}
          borderRadius="2xl"
          backgroundColor={"gray.50"}
          color="gray.500"
          _hover={{
            backgroundColor: "green.400",
            color: "gray.50",
          }}
        >
          Solicitar
        </Button>
      </ChakraLink>
      <Box>
        <Text fontSize="12px" color="gray.400" py={5}>
          {message}
        </Text>
      </Box>
      <TransactionModal isOpenModal={isOpenModal} onCloseModal={onCloseModal} cardType={"Perfil Tienda"} duration={"Mensual"} price={monthlyPrice}/>
    </Stack>
  );
};
