import {
  useDisclosure,
  useMediaQuery,
  Box,
  Flex,
  HStack,
  VStack,
  LinkOverlay,
  LinkBox,
  Text,
  Container,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  IconButton,
  VisuallyHidden,
  Divider,
} from '@chakra-ui/react';
import { SkipNavLink } from '@chakra-ui/skip-nav';
import { MdOutlineMenu } from 'react-icons/md';
import { BsTwitter, BsEnvelopeFill, BsRssFill } from 'react-icons/bs';
import Link from 'next/link';
import Image from 'next/image';
import React, { useRef } from 'react';
import theme from './theme';

type NavItemProps = {
  label: string;
  href: string;
  icon?: React.FC;
};

export const primaryNavItems: NavItemProps[] = [
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

export const socialItems: NavItemProps[] = [
  {
    label: '@principledeng on Twitter',
    href: 'https://twitter.com/principledeng',
    icon: BsTwitter,
  },
  {
    label: 'hello@principled.engineer',
    href: 'mailto:hello@principled.engineer',
    icon: BsEnvelopeFill,
  },
  { label: 'Subscribe with RSS', href: '/feed.xml', icon: BsRssFill },
];

const SocialMenu = () => (
  <HStack spacing="2">
    {socialItems.map(({ label, href, icon: Icon }) => (
      <IconButton
        as="a"
        icon={<Icon />}
        aria-label={label}
        variant="link"
        fontSize="24px"
        padding="12px"
        color="inherit"
        href={href}
        key={href}
      />
    ))}
  </HStack>
);

const FullNavMenu = () => (
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

const DrawerNavMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <IconButton
        icon={<MdOutlineMenu />}
        ref={btnRef}
        onClick={onOpen}
        aria-label="Open Navigation Menu"
        bg="transparent"
        fontSize="32px"
        width="64px"
        height="64px"
        color="gray.200"
        position="fixed"
        top={{ base: theme.space['500'], sm: theme.space['600'] }}
        left={{ base: theme.space['500'], sm: theme.space['600'] }}
        zIndex="10"
        _hover={{ bg: 'gray.800' }}
        _expanded={{ bg: 'gray.800' }}
        _focus={{ boxShadow: 'outline' }}
      />

      <Drawer isOpen={isOpen} placement="left" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent bg="gray.800" color="gray.200">
          <DrawerCloseButton aria-label="Close Navigation Menu" />

          <DrawerHeader padding="600">
            <VisuallyHidden as="h2">Navigation</VisuallyHidden>
            <Link href="/">
              <a onClick={onClose}>
                <Image
                  src="/images/principled-engineer-logo-reverse.svg"
                  width={134}
                  height={64}
                  alt=""
                  aria-hidden
                />
              </a>
            </Link>
          </DrawerHeader>
          <DrawerBody padding="0">
            <Divider marginBottom="500" color="gray.600" />

            <VStack as="nav" spacing="0">
              {primaryNavItems.map(({ label, href }) => (
                <LinkBox
                  width="100%"
                  paddingY="500"
                  paddingX="600"
                  fontSize="md"
                  fontWeight="bold"
                  key={label}
                  _hover={{ bg: 'gray.900' }}
                >
                  <Link href={href} passHref>
                    <LinkOverlay onClick={onClose}>{label}</LinkOverlay>
                  </Link>
                </LinkBox>
              ))}
            </VStack>

            <Divider marginY="500" color="gray.600" />

            <Box marginLeft="500">
              <SocialMenu />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const NavMenu = () => {
  const [showFullNav] = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`);

  return showFullNav ? <FullNavMenu /> : <DrawerNavMenu />;
};

export default NavMenu;
