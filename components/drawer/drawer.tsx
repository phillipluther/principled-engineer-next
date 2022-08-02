import { Fragment } from 'react';
import { VisuallyHidden } from 'react-aria';
import { Dialog, Transition } from '@headlessui/react';
import classnames from 'classnames';
import styles from './drawer.module.css';
import { iconButton, padded } from '../style-utils.module.css';

export type DrawerProps = {
  title: React.ReactNode;
  className?: string;
  closeLabel?: string;
  onClose: (value?: boolean) => void;
  children: React.ReactNode;
  [key: string]: any;
};

const Drawer = ({
  title,
  isOpen,
  onClose,
  className,
  closeLabel = 'Close Menu',
  children,
}: DrawerProps) => {
  return (
    <Transition show={isOpen} unmount={true}>
      <Dialog onClose={onClose} unmount={true}>
        <Transition.Child
          enter={styles.underlayEnter}
          enterFrom={styles.underlayEnterFrom}
          enterTo={styles.underlayEnterTo}
          leave={styles.underlayLeave}
          leaveFrom={styles.underlayLeaveFrom}
          leaveTo={styles.underlayLeaveTo}
          as={Fragment}
          unmount={true}
        >
          <div className={styles.underlay} />
        </Transition.Child>
        <Transition.Child
          enter={styles.overlayEnter}
          enterFrom={styles.overlayEnterFrom}
          enterTo={styles.overlayEnterTo}
          leave={styles.overlayLeave}
          leaveFrom={styles.overlayLeaveFrom}
          leaveTo={styles.overlayLeaveTo}
          as={Fragment}
          unmount={true}
        >
          <Dialog.Panel as="section" className={classnames(padded, styles.overlay, className)}>
            <header className={styles.header}>
              <Dialog.Title>{title}</Dialog.Title>

              <button
                type="button"
                className={classnames(iconButton, styles.close)}
                onClick={() => onClose()}
              >
                <span className={styles.closeX} />
                <VisuallyHidden>{closeLabel}</VisuallyHidden>
              </button>
            </header>

            {children}
          </Dialog.Panel>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};

export default Drawer;

/***
 * 
 * 
 * 
 * {/* <Transition
        show={isOpen}
        // enter="transition duration-100 ease-out"
        enter={styles.underlayEnter}
        // enterFrom="transform scale-95 opacity-0"
        // enterTo="transform scale-100 opacity-100"
        enterTo={styles.underlayEnterDone}
        // leave="transition duration-75 ease-out"
        // leaveFrom="transform scale-100 opacity-100"
        // leaveTo="transform scale-95 opacity-0"
        leaveTo={styles.underlayExit}
        as={Fragment}
      >
        <Dialog onClose={onClose} className={classnames(styles.overlay, className)}>
          <Dialog.Panel>
            <Dialog.Title>{title}</Dialog.Title>

            {children}
          </Dialog.Panel>
        </Dialog>
      </Transition> */
