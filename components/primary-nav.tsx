import NextLink from 'next/link';

export type PrimaryNavItemProps = {
  label: string;
  href: string;
};

export const primaryNavItems: PrimaryNavItemProps[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Contact',
    href: '/contact',
  },
];

const PrimaryNav = ({ showHome = true, onDark = false, ...props }) => (
  <ul>
    {primaryNavItems.map(({ label, href }) =>
      !showHome && href === '/' ? null : (
        <li key={href}>
          <NextLink href={href}>{label}</NextLink>
        </li>
      ),
    )}
  </ul>
);

export default PrimaryNav;
