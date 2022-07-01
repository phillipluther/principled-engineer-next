import { SkipNavLink, SkipNavContent } from '@chakra-ui/skip-nav';
import { Box, Container, VisuallyHidden } from '@chakra-ui/react';
import NavMenu from './nav-menu';

const NavbarLayout = ({ isHome = false, children }) => {
  return (
    <>
      <Box as="header">
        {isHome && <VisuallyHidden as="h1">The Principled Engineer</VisuallyHidden>}

        <SkipNavLink zIndex="100">Skip to Content</SkipNavLink>
        <NavMenu />
        {/* <Container size="lg">
          <PrimaryNav />
        </Container> */}
      </Box>
      <Box as="main">
        <SkipNavContent />
        {children}
      </Box>
    </>
  );
};

export default NavbarLayout;
