import React from "react";
import {
  Box,
  Container,
  Flex,
  Text,
  Stack,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  VStack,
  Icon,
  useDisclosure,
  Image,
  Link as ChakraLink,
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavbarLinkProps } from "./NavbarLink";
import { NavbarLink } from "./NavbarLink";
import { LoginModal } from "../Modal";
import Link from "next/link";

export const Navbar = () => {
  const {
    isOpen: isOpenDrawer,
    onOpen: onOpenDrawer,
    onClose: onCloseDrawer,
  } = useDisclosure();
  const {
    isOpen: isOpenModal,
    onOpen: onOpenModal,
    onClose: onCloseModal,
  } = useDisclosure();

  const NAVBAR_LINKS: NavbarLinkProps[] = [
    // {
    //   href: "/login",
    //   img: "/icons/login.png",
    //   label: "Ingresar",
    // },
    {
      href: "#id-about",
      img: "/icons/aboutRecyclapp.png",
      label: "APP",
    },
    {
      href: "#id-services",
      img: "/icons/services.png",
      label: "Servicios",
    },
    {
      href: "#id-download",
      img: "/icons/download.png",
      label: "Descarga",
    },
    {
      href: "#id-rating",
      img: "/icons/rating.png",
      label: "Opiniones",
    },
    {
      href: "#id-contact",
      img: "/icons/contact.png",
      label: "Contacto",
    },
    {
      href: "#id-footer",
      img: "/icons/leaves.png",
      label: "Seguinos",
    },
  ];

  return (
    <Box
      as="nav"
      bg={"gray.50"}
      boxShadow="2xl"
      height={20}
      position={"sticky"}
      top={0}
      width="full"
      zIndex={"modal"}
    >
      <Container height="full" maxW="full">
        <Flex alignItems="center" height="full" justifyContent="space-between">
          <Link href="/">
            <a>
              <Text color="gray.700" fontSize="3xl" fontWeight={900}>
                RecyclApp
              </Text>
            </a>
          </Link>
          <Stack
            direction="row"
            display={{ base: "none", xl: "flex" }}
            fontSize="lg"
            fontWeight={700}
            spacing={12}
          >
            <ChakraLink onClick={onOpenModal}>
              <Stack spacing={2} direction="row">
                <Image src="/icons/login.png" width="6" height="6" />
                <Text
                  as="span"
                  cursor="pointer"
                  fontWeight={600}
                  color="gray.700"
                >
                  Ingresar
                </Text>
              </Stack>
            </ChakraLink>
            {NAVBAR_LINKS.map((link, index) => {
              return (
                <NavbarLink
                  key={index}
                  href={link.href}
                  img={link.img}
                  label={link.label}
                />
              );
            })}
          </Stack>
          <Icon
            _hover={{ cursor: "pointer" }}
            as={HamburgerIcon}
            display={{ base: "flex", xl: "none" }}
            h={6}
            w={6}
            onClick={onOpenDrawer}
          />
        </Flex>
        <Drawer isOpen={isOpenDrawer} placement="top" onClose={onCloseDrawer}>
          <DrawerOverlay p={0} />
          <DrawerContent>
            <DrawerBody>
              <VStack mb={10} mt={4}>
                <Icon
                  _hover={{ cursor: "pointer" }}
                  as={CloseIcon}
                  h={6}
                  position="absolute"
                  right={4}
                  w={6}
                  onClick={onCloseDrawer}
                />
                <Stack align="center" pt={10} spacing={10}>
                  {NAVBAR_LINKS.map((link, index) => (
                    <NavbarLink
                      key={index}
                      href={link.href}
                      img={link.img}
                      label={link.label}
                    />
                  ))}
                </Stack>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Container>
      <LoginModal isOpenModal={isOpenModal} onCloseModal={onCloseModal} />
    </Box>
  );
};
