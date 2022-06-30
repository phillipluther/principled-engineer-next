import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';
import { Box, Container } from '@chakra-ui/react';
import NavMenu from './nav-menu';

const NavbarLayout = ({ isHome = false, children }) => {
  return (
    <>
      <Box as="header">
        <NavMenu />
        {/* <Container size="lg">
          <PrimaryNav />
        </Container> */}
      </Box>
      <Box as="main">{children}</Box>
    </>
  );
};

export default NavbarLayout;
