import React from 'react'
import {VStack, Box, Container} from "@chakra-ui/react"

interface SectionProps {
  backgroundColor?: string;
  children: React.ReactNode;
}

export const Section = (props: SectionProps) => {
  const {backgroundColor, children} = props;
  return (
    <VStack height="auto" overflow="hidden" position="relative">
      <Box
        backgroundColor={backgroundColor}
        backgroundPosition={"center center"}
        backgroundSize={"cover"}
        height="100%"
        width="100%"
      >
        <Box
          paddingX={{base: 4, md: 8}}
          paddingY={[20, 30, 40, 60, 150]}
        >
          <Container maxWidth="container.xl">
            {children}
          </Container>
        </Box>
      </Box>
    </VStack>
  )
}