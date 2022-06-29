import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';
import { Box, Container } from '@chakra-ui/react';
import PrimaryNav from './primary-nav';

const NavbarLayout = ({ isHome = false, children }) => {
  return (
    <>
      <Box as="header" bg={isHome ? 'transparent' : 'gray.900'}>
        <Container size="lg">
          <PrimaryNav />
        </Container>
      </Box>
      <Box as="main">{children}</Box>
    </>
  );
};

export default NavbarLayout;
