import type { AppProps } from 'next/app';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import GlobalLayout from '../components/global-layout';
import '@fontsource/merriweather/400.css';
import '@fontsource/merriweather/900.css';
import theme from '../components/theme';
import { NextComponentType } from 'next';
import React from 'react';

type CustomAppProps = AppProps & {
  Component: NextComponentType & { layout?: React.FC };
};

const App = ({ Component, pageProps }: CustomAppProps) => {
  const Layout = Component.layout || GlobalLayout;

  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
};
export default App;
