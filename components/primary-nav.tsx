import { LinkBox, LinkOverlay } from '@chakra-ui/react';
import Link from 'next/link';

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
    label: 'Posts',
    href: '/blog',
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

const PrimaryNav = ({ showHome = true, ...props }) => (
  <>
    {primaryNavItems.map(({ label, href }) =>
      !showHome && href === '/' ? null : (
        <LinkBox
          paddingX="400"
          paddingY="500"
          fontSize="md"
          fontWeight="bold"
          key={label}
          textStyle="navLink"
          {...props}
        >
          <Link href={href} passHref>
            <LinkOverlay>{label}</LinkOverlay>
          </Link>
        </LinkBox>
      ),
    )}
  </>
);

export default PrimaryNav;
