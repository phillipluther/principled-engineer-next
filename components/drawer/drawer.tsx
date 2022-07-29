import { useRef } from 'react';
import { FocusScope, useDialog, useModal, useOverlay, usePreventScroll } from 'react-aria';
import classnames from 'classnames';
import styles from './drawer.module.css';
import { padded } from '../styles.module.css';

export type DrawerProps = {
  title: string;
  closeLabel?: string;
  headingTag?: 'h2' | 'h3' | 'h4' | 'h5';
  children: React.ReactNode;
  [key: string]: any;
};

const Drawer = (props: DrawerProps) => {
  let { title, children } = props;

  // Handle interacting outside the dialog and pressing
  // the Escape key to close the modal.
  let ref = useRef();
  let { overlayProps, underlayProps } = useOverlay(props, ref);

  // Prevent scrolling while the modal is open, and hide content
  // outside the modal from screen readers.
  usePreventScroll();
  let { modalProps } = useModal();

  // Get props for the dialog and its title
  let { dialogProps, titleProps } = useDialog(props, ref);

  return (
    <div className={styles.underlay} {...underlayProps}>
      <FocusScope contain restoreFocus autoFocus>
        <section
          className={classnames(padded, styles.overlay)}
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          ref={ref}
        >
          <h2 className={styles.heading} {...titleProps}>
            {title}
          </h2>
          {children}
        </section>
      </FocusScope>
    </div>
  );
};

export default Drawer;
