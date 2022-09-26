import React from "react";
import Link from "next/link";
import { Text, Image, Stack } from "@chakra-ui/react";

type Props = {};

export interface NavbarLinkProps {
  href: string;
  img?: string;
  onToggleDrawer?: () => void;
  label: string;
}

export const NavbarLink = (props: NavbarLinkProps) => {
  const { href, img, label, onToggleDrawer } = props;
  return (
    <Link href={href} scroll={false}>
      <Stack
        spacing={2}
        direction="row"
        onClick={() => (!onToggleDrawer ? {} : onToggleDrawer())}
      >
        <Image src={img} width="6" height="6" />
        <Text
          as="span"
          cursor="pointer"
          fontWeight={600}
          color="gray.700"
          _hover={{
            color: "green.400",
          }}
        >
          {label}
        </Text>
      </Stack>
    </Link>
  );
};
