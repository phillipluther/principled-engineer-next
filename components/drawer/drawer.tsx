import { Dialog } from '@headlessui/react';
import classnames from 'classnames';
import styles from './drawer.module.css';
import { iconButton, padded } from '../style-utils.module.css';

export type DrawerProps = {
  title: React.ReactNode;
  className?: string;
  closeLabel?: string;
  onClose: (value: boolean) => void;
  children: React.ReactNode;
  [key: string]: any;
};

const Drawer = ({ title, isOpen, onClose, className, children }: DrawerProps) => {
  return (
    <>
      <div className={styles.underlay} />
      <Dialog open={isOpen} onClose={onClose} className={classnames(styles.overlay, className)}>
        <Dialog.Panel>
          <Dialog.Title>{title}</Dialog.Title>

          {children}
        </Dialog.Panel>
      </Dialog>
    </>
  );
};

export default Drawer;
