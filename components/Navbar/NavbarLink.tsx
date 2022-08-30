import React from "react";
import Link from "next/link";
import { Text, Image, Stack } from "@chakra-ui/react";

type Props = {};

export interface NavbarLinkProps {
  href: string;
  img?: string;
  label: string;
}

export const NavbarLink = (props: NavbarLinkProps) => {
  const { href, img, label } = props;
  return (
    <Link href={href} scroll={false}>
      <Stack spacing={2} direction="row">
        <Image src={img} width="6" height="6" />
        <Text as="span" cursor="pointer" fontWeight={600}>
          {label}
        </Text>
      </Stack>
    </Link>
  );
};
