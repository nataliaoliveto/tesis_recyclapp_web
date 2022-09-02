import React from "react";
import { Text } from "@chakra-ui/react";
import { Section } from "../components";

type Props = {};

export const About = (props: Props) => {
  return (
    <Section id="id-about" backgroundColor="yellow.200">
      <Text>About</Text>
    </Section>
  );
};
