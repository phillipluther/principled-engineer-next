import Link from 'next/link';
import * as styles from './primary-nav.module.scss';

export const navLinkData = [
  {
    name: 'home',
    label: 'Home',
    href: '/',
  },
  {
    name: 'about',
    label: 'Contact',
    href: '/contact',
  },
];

const PrimaryNav = ({
  className,
  home: showHome = true,
  ...props
}: {
  className?: string;
  home?: boolean;
}) => (
  <ul className={styles.list} {...props}>
    {navLinkData.map(({ name, label, href }) => {
      if (label === 'home' && showHome === false) {
        return null;
      }

      return (
        <li key={name}>
          <Link href={href}>
            <a>{label}</a>
          </Link>
        </li>
      );
    })}
  </ul>
);

export default PrimaryNav;
