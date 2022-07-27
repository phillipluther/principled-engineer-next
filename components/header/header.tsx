import { useState, useRef } from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { VisuallyHidden } from 'react-aria';
import classnames from 'classnames';
import Drawer from '../drawer';
import PrimaryNav from '../primary-nav';
import SocialMenu from '../social-menu';
import { SkipNavLink } from '../skip-nav';
import { OverlayContainer, OverlayProvider, useButton } from 'react-aria';
import { useOverlayTriggerState } from 'react-stately';

import styles from './header.module.css';
import { padded } from '../styles.module.css';

const Header = () => {
  const [isMenuOpen, toggleMenu] = useState(false);
  const state = useOverlayTriggerState({});
  const openButtonRef = useRef();
  const closeButtonRef = useRef();

  // useButton ensures that focus management is handled correctly,
  // across all browsers. Focus is restored to the button once the
  // dialog closes.
  const { buttonProps: openButtonProps } = useButton(
    {
      onPress: () => state.open(),
    },
    openButtonRef,
  );

  const { buttonProps: closeButtonProps } = useButton(
    {
      onPress: () => state.close(),
    },
    closeButtonRef,
  );

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

      <button type="button" className={styles.menuButton} {...openButtonProps} ref={openButtonRef}>
        <span role="presentation" className={styles.hamburger} />
        <VisuallyHidden>{`${state.isOpen ? 'Hide' : 'Show'} Navigation`}</VisuallyHidden>
      </button>

      {state.isOpen && (
        <OverlayContainer>
          <Drawer title="Navigation" isOpen onClose={state.close} isDismissable>
            <nav>
              <PrimaryNav />
              <SocialMenu />
            </nav>
          </Drawer>
        </OverlayContainer>
      )}
    </header>
  );
};

export default Header;
