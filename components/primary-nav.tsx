import { Box, HStack, LinkOverlay, LinkBox, Text } from '@chakra-ui/react';
import NextLink from 'next/link';

type NavItemProps = {
  label: string;
  href: string;
};

type PrimaryNavProps = {
  additionalItems?: NavItemProps[];
};

export const navItems: NavItemProps[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'Posts',
    href: '/posts',
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

const PrimaryNav = ({ additionalItems = [] }: PrimaryNavProps) => {
  const allNavItems = [...navItems, ...additionalItems];

  return (
    <HStack spacing="6">
      {allNavItems.map(({ label, href }) => (
        <LinkBox paddingY="500" fontSize="md" fontWeight="bold" textTransform="uppercase">
          <NextLink href={href} passHref>
            <LinkOverlay>{label}</LinkOverlay>
          </NextLink>
        </LinkBox>
      ))}
    </HStack>
  );
};

export default PrimaryNav;
