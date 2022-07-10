import { HStack, Box, Flex, Container, LinkBox, LinkOverlay } from '@chakra-ui/react';
import Link from 'next/link';
import { primaryNavItems } from './nav-menu-items';

const HorizontalNavMenu = ({ home = true, ...props }: { home?: boolean; [key: string]: any }) => (
  <HStack spacing="2" {...props}>
    {primaryNavItems.map(({ label, href }) =>
      !home && href === '/' ? null : (
        <LinkBox
          paddingX="400"
          paddingY="500"
          fontSize="md"
          fontWeight="bold"
          key={label}
          textStyle="navLink"
        >
          <Link href={href} passHref>
            <LinkOverlay>{label}</LinkOverlay>
          </Link>
        </LinkBox>
      ),
    )}
  </HStack>
);

export default HorizontalNavMenu;
