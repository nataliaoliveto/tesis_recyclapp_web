import React from "react";
import { VStack, Box, Container } from "@chakra-ui/react";

interface SectionProps {
  id: string;
  backgroundColor?: string;
  children: React.ReactNode;
}

export const Section = (props: SectionProps) => {
  const { id, backgroundColor, children } = props;
  return (
    <VStack height="auto" overflow="hidden" position="relative" id={id}>
      <Box
        backgroundColor={backgroundColor}
        backgroundPosition={"center center"}
        backgroundSize={"cover"}
        height="100%"
        width="100%"
      >
        <Box paddingX={{ base: 4, md: 8 }} paddingY={[20, 30, 40, 60, 150]}>
          <Container maxWidth="container.xl">{children}</Container>
        </Box>
      </Box>
    </VStack>
  );
};
