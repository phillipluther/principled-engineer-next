import { MouseEventHandler, useRef } from 'react';
import type { AriaDialogProps } from '@react-types/dialog';
import type { OverlayProps } from '@react-aria/overlays';
import {
  FocusScope,
  VisuallyHidden,
  useDialog,
  useModal,
  useOverlay,
  usePreventScroll,
} from 'react-aria';
import classnames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import styles from './drawer.module.css';
import { iconButton, padded } from '../style-utils.module.css';

export type DrawerProps = AriaDialogProps &
  OverlayProps & {
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
    <CSSTransition
      in={props.isOpen}
      unmountOnExit
      timeout={{ enter: 0, exit: 160 }}
      classNames={{
        enter: styles.underlayEnter,
        enterDone: styles.underlayEnterDone,
        exit: styles.underlayExit,
      }}
    >
      <div className={styles.underlay} {...underlayProps}>
        <FocusScope contain restoreFocus autoFocus>
          <CSSTransition
            in={props.isOpen}
            appear
            nodeRef={ref}
            timeout={{ enter: 0, exit: 240 }}
            classNames={{
              appear: styles.overlayAppear,
              appearDone: styles.overlayAppearDone,
              exit: styles.overlayExit,
            }}
          >
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
          </CSSTransition>
        </FocusScope>
      </div>
    </CSSTransition>
  );
};

export default Drawer;
