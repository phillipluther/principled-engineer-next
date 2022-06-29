import { Box, HStack, LinkOverlay, LinkBox, Text, useMediaQuery } from '@chakra-ui/react';
import NextLink from 'next/link';
import theme from './theme';

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
  const [isLarge] = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`);

  return (
    <Box as="nav">
      <HStack spacing="6">
        {allNavItems.map(({ label, href }) => (
          <LinkBox paddingY="500" fontSize="md" fontWeight="bold" key={label}>
            <NextLink href={href} passHref>
              <LinkOverlay>{label}</LinkOverlay>
            </NextLink>
          </LinkBox>
        ))}
      </HStack>

      {isLarge ? <p>Large</p> : null}
    </Box>
  );
};

export default PrimaryNav;
