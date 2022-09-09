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
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { NavbarLinkProps } from "./NavbarLink";
import { NavbarLink } from "./NavbarLink";
import Link from "next/link";


type Props = {};

export const Navbar = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const NAVBAR_LINKS: NavbarLinkProps[] = [
    {
      href: "#id-hero",
      img: "/icons/hero.png",
      label: "Inicio",
    },
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
      img: "/icons/footer.png",
      label: "Nosotros",
    },
  ];

  return (
    <Box
      as="nav"
      bg={"white"}
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
              <Text color="primary.500" fontSize="3xl" fontWeight={900}>
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
            onClick={onOpen}
          />
        </Flex>
        <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
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
                  onClick={onClose}
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
    </Box>
  );
};
