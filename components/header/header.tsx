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
import { flipped, iconButton, padded } from '../style-utils.module.css';

const NavTitle = () => (
  <span className={styles.navTitle}>
    <NextImage
      src="/images/favicon.png"
      alt=""
      aria-hidden
      width={48}
      height={48}
      className={styles.badge}
    />
    <span className={styles.navText}>The Principled Engineer</span>
  </span>
);

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

      <button
        type="button"
        className={classnames(iconButton, styles.menuButton)}
        {...openButtonProps}
        ref={openButtonRef}
      >
        <span className={styles.hamburger} role="presentation" />
        <VisuallyHidden>Show Navigation</VisuallyHidden>
      </button>

      {state.isOpen && (
        <OverlayContainer>
          <Drawer title={<NavTitle />} isOpen onClose={state.close} isDismissable>
            <nav className={styles.navWrapper}>
              <NextImage
                src="/images/divider-flourish-alt.svg"
                width={130}
                height={12}
                role="presentation"
                className={styles.flourish}
              />

              <PrimaryNav className={styles.nav} />

              <NextImage
                src="/images/divider-flourish-alt.svg"
                width={130}
                height={12}
                role="presentation"
                className={classnames(flipped, styles.flourish)}
              />

              <SocialMenu className={styles.social} />
            </nav>
          </Drawer>
        </OverlayContainer>
      )}
    </header>
  );
};

export default Header;
