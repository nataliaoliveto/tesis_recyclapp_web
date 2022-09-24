import { VStack, Flex } from "@chakra-ui/react";
import { Navbar, Footer } from "../components"; 

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = (props) => {
  const { children } = props;

  return (
    <>
      <VStack role="main" spacing={0} backgroundColor="gray.75">
        {/* Navbar */}
        <Navbar />

        {/* Main Content */}
        <Flex flexDir="column" width="full">
          {children}
          {/* Footer */}
          <Footer />
        </Flex>
      </VStack>
    </>
  );
};
