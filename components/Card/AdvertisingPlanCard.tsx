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

interface IAdvertisingPlanCard {
  titleBgColor: string;
  title: string;
  oneTimePrice: string;
}

export const AdvertisingPlanCard = ({
  titleBgColor,
  title,
  oneTimePrice,
}: IAdvertisingPlanCard) => {
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  return (
    <Stack
      px={4}
      py={4}
      borderRadius="20px"
      h="300px"
      justifyContent="space-between"
      shadow="xl"
      minW="300px"
    >
      <Box bgColor={titleBgColor} borderRadius="full" w="full" py={1}>
        <Text fontSize="28px" fontWeight={600} color="gray.700">
          {title}
        </Text>
      </Box>

      <Stack>
        <Text fontSize="20px" fontWeight={500} color="gray.500">
          Único pago de
        </Text>
        <Text fontSize="24px" fontWeight={600} color="teal.600">
          AR$ {oneTimePrice}
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

      <TransactionModal
        isOpenModal={isOpenModal}
        onCloseModal={onCloseModal}
        duration={title}
        price={oneTimePrice}
      />
    </Stack>
  );
};
