import { HStack, Box, Flex, Container, LinkBox, LinkOverlay } from '@chakra-ui/react';
import { SkipNavLink } from '@chakra-ui/skip-nav';
import Link from 'next/link';
import SocialMenu from '../social-menu';
import { primaryNavItems } from './nav-menu-items';

const HorizontalNavMenu = () => (
  <>
    <SkipNavLink id="skip-to-content" zIndex="100">
      Skip to Content
    </SkipNavLink>

    <Box as="nav" position="absolute" top="0" left="0" zIndex="10" width="100vw">
      <Flex justify="space-between" as={Container} size="lg" color="gray.200">
        <HStack spacing="2">
          {primaryNavItems.map(({ label, href }) => (
            <LinkBox paddingY="600" paddingX="400" fontSize="md" fontWeight="bold" key={label}>
              <Link href={href} passHref>
                <LinkOverlay>{label}</LinkOverlay>
              </Link>
            </LinkBox>
          ))}
        </HStack>

        <SocialMenu />
      </Flex>
    </Box>
  </>
);

export default HorizontalNavMenu;
