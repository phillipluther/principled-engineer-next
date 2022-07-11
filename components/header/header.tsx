import { Box, useMediaQuery } from '@chakra-ui/react';
import DrawerHeaderMenu from './drawer-header-menu';
import InlineHeaderMenu from './inline-header-menu';
import theme from '../theme';

const Header = () => {
  const [showInlineNav] = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`);

  return (
    <Box as="header" width="100vw">
      {showInlineNav ? <InlineHeaderMenu /> : <DrawerHeaderMenu />}
    </Box>
  );
};

export default Header;
