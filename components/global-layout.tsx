import { SkipNavContent } from '@chakra-ui/skip-nav';
import { Box, Container, VisuallyHidden } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import NavMenu from './nav-menu';

const NavbarLayout = ({ children }) => {
  const router = useRouter();
  const isHome = router.asPath === '/';

  return (
    <>
      <Box as="header">
        {isHome && <VisuallyHidden as="h1">The Principled Engineer</VisuallyHidden>}

        <NavMenu />
      </Box>
      <Box as="main">
        <SkipNavContent id="skip-to-content" />
        {children}
      </Box>
    </>
  );
};

export default NavbarLayout;
