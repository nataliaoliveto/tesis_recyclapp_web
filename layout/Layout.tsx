import { VStack, Flex } from "@chakra-ui/react";
import { Navbar, Footer } from "../components";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <div>          
          <ToastContainer />
        </div>
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
