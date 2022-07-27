import { useRef } from 'react';
import { FocusScope, useDialog, useModal, useOverlay, usePreventScroll } from 'react-aria';
import classnames from 'classnames';
import styles from './drawer.module.css';
import { padded } from '../styles.module.css';

export type DrawerProps = {
  title: string;
  children: React.ReactNode;
  [key: string]: any;
};

const DrawerMenu = (props: DrawerProps) => {
  const { title, children } = props;

  // Handle interacting outside the dialog and pressing
  // the Escape key to close the modal.
  const ref = useRef();
  const { overlayProps, underlayProps } = useOverlay(props, ref);

  // Prevent scrolling while the modal is open, and hide content
  // outside the modal from screen readers.
  usePreventScroll();
  const { modalProps } = useModal();

  // Get props for the dialog and its title
  const { dialogProps, titleProps } = useDialog(props, ref);

  return (
    <div className={styles.underlay}>
      <FocusScope contain restoreFocus autoFocus>
        <div
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          ref={ref}
          className={classnames(styles.overlay, padded)}
        >
          <h3 {...titleProps}>{title}</h3>
          {children}
        </div>
      </FocusScope>
    </div>
  );
};

export default DrawerMenu;
