import { Box } from '@chakra-ui/react';
import Header from './header';
import Footer from './footer';
import { SkipNavTarget } from './skip-nav';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Box as="main">
        <SkipNavTarget />
        {children}
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
