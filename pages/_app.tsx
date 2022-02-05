import { ChakraProvider } from '@chakra-ui/react';
import styled from '@emotion/styled';
import '@fontsource/m-plus-rounded-1c';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

const AppContainer = styled.div`
  font-family: 'M PLUS Rounded 1c';
`;

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AppContainer>
        <Component {...pageProps} />
      </AppContainer>
    </ChakraProvider>
  );
}

export default MyApp;
