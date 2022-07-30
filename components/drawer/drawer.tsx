import { MouseEventHandler, useRef } from 'react';
import {
  FocusScope,
  VisuallyHidden,
  useDialog,
  useModal,
  useOverlay,
  usePreventScroll,
} from 'react-aria';
import classnames from 'classnames';
import styles from './drawer.module.css';
import { iconButton, padded } from '../style-utils.module.css';

export type DrawerProps = {
  title: React.ReactNode;
  className?: string;
  closeLabel?: string;
  headingTag?: 'h2' | 'h3' | 'h4' | 'h5';
  onClose?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  [key: string]: any;
};

const Drawer = (props: DrawerProps) => {
  const {
    title,
    className,
    closeLabel = 'Close Menu',
    onClose,
    children,
    headingTag: HeadingTag = 'h2',
  } = props;

  const ref = useRef();
  const { overlayProps, underlayProps } = useOverlay(props, ref);
  const { dialogProps, titleProps } = useDialog(props, ref);
  const { modalProps } = useModal();

  usePreventScroll();

  return (
    <div className={styles.underlay} {...underlayProps}>
      <FocusScope contain restoreFocus autoFocus>
        <section
          className={classnames(padded, styles.overlay, className)}
          {...overlayProps}
          {...dialogProps}
          {...modalProps}
          ref={ref}
        >
          <header className={styles.header}>
            <HeadingTag className={styles.heading} {...titleProps}>
              {title}
            </HeadingTag>

            {onClose && (
              <button
                type="button"
                className={classnames(iconButton, styles.close)}
                onClick={onClose}
              >
                <VisuallyHidden>{closeLabel}</VisuallyHidden>
                <span className={styles.closeX} role="presentation" />
              </button>
            )}
          </header>

          {children}
        </section>
      </FocusScope>
    </div>
  );
};

export default Drawer;
