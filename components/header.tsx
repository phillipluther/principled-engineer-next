import NextImage from 'next/image';
import NextLink from 'next/link';
import { VisuallyHidden } from 'react-aria';
import Padder from './padder';
// import DrawerMenu from './drawer-menu';
import PrimaryNav from './primary-nav';
import SocialMenu from './social-menu';
import { SkipNavLink } from './skip-nav';

export const responsiveHeaderWidth = {
  base: '100%',
  lg: '240px',
  xl: '288px',
};

const Header = () => {
  return (
    <Padder as="header">
      <SkipNavLink label="Skip to Content" />

      <div>
        <h1>
          <NextLink href="/">
            <a>
              <NextImage
                src="/images/principled-engineer-logo.png"
                width={471}
                height={240}
                alt=""
                aria-hidden
              />
              <VisuallyHidden>The Principled Engineer</VisuallyHidden>
            </a>
          </NextLink>
        </h1>
        <nav>
          <PrimaryNav />
          <SocialMenu />
        </nav>
      </div>
    </Padder>
  );
};

export default Header;
