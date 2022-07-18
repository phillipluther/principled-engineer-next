import { Box, Flex } from '@chakra-ui/react';
import Header, { responsiveHeaderWidth } from './header';
import Footer from './footer';
import Padder from './padder';
import { SkipNavTarget } from './skip-nav';

const Layout = ({ children }) => {
  return (
    <Flex wrap="wrap">
      <Header />
      <Box
        bgGradient={{
          base: 'linear(to-b, rgba(0, 0, 0, 0.0333), rgba(0, 0, 0, 0) 3%)',
          lg: 'linear(to-r, rgba(0, 0, 0, 0.0333), rgba(0, 0, 0, 0) 3%)',
        }}
        width={{
          base: '100vw',
          lg: `calc(100vw - ${responsiveHeaderWidth.lg})`,
          xl: `calc(100vw - ${responsiveHeaderWidth.xl})`,
        }}
      >
        <Padder as="main">
          <SkipNavTarget />
          {children}
        </Padder>
        <Footer />
      </Box>
    </Flex>
  );
};

export default Layout;
