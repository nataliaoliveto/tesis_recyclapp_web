import React from "react";
import {
  Stack,
  Box,
  Text,
  Image,
  Button,
  useDisclosure,
  Link as ChakraLink,
} from "@chakra-ui/react";
import { TransactionModal } from "../Modal";

interface IDonationCardValues {
    donationPrice: string;
  }

export const DonationCardValues = ({
    donationPrice,
  }: IDonationCardValues) => {
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  return (
    <Stack
      minW={"250px"}
      maxW={{ base: "250px", lg: "300px" }}
      textAlign="center"
      bgColor="gray.50"
      px={4}
      py={4}
      pb={8}
      minH="150px"
      shadow="lg"
      justifyContent="space-between"
      borderRadius="20px"
      position="relative"
    >
      <Stack>
        <Text fontSize="20px" fontWeight={500} color="gray.500">
          Colaborar con
        </Text>
        <Text fontSize="24px" fontWeight={600} color="yellow.500">
          AR$ {donationPrice}
        </Text>
      </Stack>

      <ChakraLink
        onClick={onOpenModal}
        _hover={{
          textDecoration: "none",
        }}
      >
        <Button
          borderColor={"yellow.200"}
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

      <Box display="flex" h="2px" w="full" bgColor="yellow.200" />

      <TransactionModal isOpenModal={isOpenModal} onCloseModal={onCloseModal} cardType={"Donación"} duration={"Semanal"} price={donationPrice}/>
    </Stack>
  );
};
