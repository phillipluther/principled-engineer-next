import { useMediaQuery } from '@chakra-ui/react';
import HorizontalNavMenu from './horizontal-nav-menu';
import DrawerNavMenu from './drawer-nav-menu';
import theme from '../theme';

const NavMenu = () => {
  const [showFullNav] = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`);

  return showFullNav ? <HorizontalNavMenu /> : <DrawerNavMenu />;
};

export default NavMenu;

export { HorizontalNavMenu };
export { DrawerNavMenu };
export { primaryNavItems } from './nav-menu-items';
export type { PrimaryNavItemProps } from './nav-menu-items';
