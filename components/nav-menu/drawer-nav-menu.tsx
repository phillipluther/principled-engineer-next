import {
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Box,
  VStack,
  Divider,
  LinkBox,
  LinkOverlay,
  VisuallyHidden,
  useDisclosure,
} from '@chakra-ui/react';
import { MdOutlineMenu } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { primaryNavItems } from './nav-menu-items';
import theme from '../theme';
import SocialMenu from '../social-menu';

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
        bg="gray.800"
        fontSize="32px"
        width="56px"
        height="56px"
        color="gray.200"
        position="fixed"
        top={{ base: theme.space['500'], sm: theme.space['600'] }}
        left={{ base: theme.space['500'], sm: theme.space['600'] }}
        zIndex="10"
        _hover={{ bg: 'gray.900' }}
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
                  src="/images/principled-engineer-header-logo-reverse.svg"
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
              <SocialMenu onDark />
            </Box>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerNavMenu;
