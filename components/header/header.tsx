import { useRef } from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import classnames from 'classnames';
import { VisuallyHidden, OverlayContainer, useButton } from 'react-aria';
import { useOverlayTriggerState } from 'react-stately';
import Drawer from '../drawer';
import PrimaryNav from '../primary-nav';
import SocialMenu from '../social-menu';
import { SkipNavLink } from '../skip-nav';

import styles from './header.module.css';
import { displayFont, padded } from '../styles.module.css';

const Header = () => {
  let state = useOverlayTriggerState({});
  let openButtonRef = useRef();
  let closeButtonRef = useRef();

  // useButton ensures that focus management is handled correctly,
  // across all browsers. Focus is restored to the button once the
  // dialog closes.
  let { buttonProps: openButtonProps } = useButton(
    {
      onPress: () => state.open(),
    },
    openButtonRef,
  );

  let { buttonProps: closeButtonProps } = useButton(
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
        <span className={styles.hamburger} role="presentation" />
        <VisuallyHidden>Show Navigation</VisuallyHidden>
      </button>

      {state.isOpen && (
        <OverlayContainer>
          <Drawer title="Navigation Menu" isOpen onClose={state.close} isDismissable>
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
