import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import GlobalLayout from '../components/global-layout';
import '@fontsource/merriweather/400.css';
import '@fontsource/merriweather/900.css';
import theme from '../components/theme';

const App = ({ Component, pageProps }: AppProps) => (
  <ChakraProvider theme={theme}>
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  </ChakraProvider>
);

export default App;
