import React from 'react'
import Link from "next/link";
import {Text} from "@chakra-ui/react"

type Props = {}

export interface NavbarLinkProps {
  href: string;
  label: string;
}

export const NavbarLink = (props: NavbarLinkProps) => {
  const {href, label} = props;
  return (
    <Link href={href}>
    <Text as="span" cursor="pointer" fontWeight={600}>
      {label}
    </Text>
  </Link>
  )
}