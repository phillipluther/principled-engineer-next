import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';
import { Box, Container } from '@chakra-ui/react';
import PrimaryNav from './primary-nav';

const NavbarLayout = ({ isHome = false, children }) => {
  return (
    <>
      <Box as="header" bg="gray.900">
        <Container size="lg">
          <Box as="nav" color="gray.200">
            <PrimaryNav />
          </Box>
        </Container>
      </Box>
      <Box as="main">{children}</Box>
    </>
  );
};

export default NavbarLayout;
