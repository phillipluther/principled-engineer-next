import { useState } from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { VisuallyHidden } from 'react-aria';
import classnames from 'classnames';
// import DrawerMenu from './drawer-menu';
import PrimaryNav from '../primary-nav';
import SocialMenu from '../social-menu';
import { SkipNavLink } from '../skip-nav';

import styles from './header.module.css';
import { padded } from '../styles.module.css';

export const responsiveHeaderWidth = {
  base: '100%',
  lg: '240px',
  xl: '288px',
};

const Header = () => {
  const [isMenuOpen, toggleMenu] = useState(false);

  return (
    <header className={classnames(padded, styles.header)}>
      <SkipNavLink label="Skip to Content" />
      <h1 className={styles.logo}>
        <NextLink href="/">
          <a>
            <NextImage
              src="/images/principled-engineer-logo.svg"
              width={470}
              height={240}
              alt=""
              aria-hidden
            />
            <VisuallyHidden>The Principled Engineer</VisuallyHidden>
          </a>
        </NextLink>
      </h1>

      <div className={styles.subhead}>
        <NextImage
          src="/images/code-good-code-well.svg"
          layout="fill"
          objectFit="contain"
          alt=""
          aria-hidden
        />
        <VisuallyHidden elementType="p">Code good. Code well.</VisuallyHidden>
      </div>

      <button type="button" className={styles.menuButton} onClick={() => toggleMenu(!isMenuOpen)}>
        <span role="presentation" className={styles.hamburger} />
        <VisuallyHidden>{`${isMenuOpen ? 'Hide' : 'Show'} Navigation`}</VisuallyHidden>
      </button>

      {isMenuOpen && (
        <nav>
          <PrimaryNav />
          <SocialMenu />
        </nav>
      )}
    </header>
  );
};

export default Header;
