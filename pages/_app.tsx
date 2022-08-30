import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const global = {
  body: {
    minHeight: "100vh",
    backgroundColor: "white",
    color: "black",
    margin: 0,
  },
};

const fonts = {
  body: "Inter, sans-serif",
};

const theme = extendTheme({ styles: global, colors, fonts });

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
