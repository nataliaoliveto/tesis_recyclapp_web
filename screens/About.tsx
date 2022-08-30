import React from "react";
import { Section } from "../components";

type Props = {};

export const About = (props: Props) => {
  return (
    <Section id="id-about" backgroundColor="yellow.200">
      <h1>RecyclApp</h1>
      <p>
        Más que una red social para unir a quienes cuidamos el medioambiente
      </p>
    </Section>
  );
};
