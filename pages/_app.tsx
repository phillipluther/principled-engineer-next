import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import '@fontsource/merriweather/400.css';
import '@fontsource/merriweather/700.css';
import '@fontsource/playfair-display/400.css';
import Layout from '../components/layout';
import theme from '../components/theme';

const App = ({ Component, pageProps }) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};
export default App;
