import {
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Box,
  Flex,
  VStack,
  Divider,
  VisuallyHidden,
  useDisclosure,
} from '@chakra-ui/react';
import { MdOutlineMenu } from 'react-icons/md';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import HeaderLogo from './header-logo';
import theme from '../theme';
import SocialMenu from '../social-menu';
import PrimaryNav from '../primary-nav';

const DrawerHeaderMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Flex justify="space-between" padding={{ base: theme.space['500'], sm: theme.space['600'] }}>
        <HeaderLogo />
        <IconButton
          icon={<MdOutlineMenu />}
          ref={btnRef}
          onClick={onOpen}
          aria-label="Open Navigation Menu"
          bg="#fff"
          borderBottom={`1px solid ${theme.colors.gray['300']}`}
          boxShadow="0 1px 4px rgba(0, 0, 0, 0.15)"
          fontSize="32px"
          width="56px"
          height="56px"
          color="gray.700"
          position="fixed"
          top={{ base: theme.space['500'], sm: theme.space['600'] }}
          right={{ base: theme.space['500'], sm: theme.space['600'] }}
          zIndex="10"
          _hover={{ bg: 'gray.100' }}
          _expanded={{ bg: 'gray.100' }}
          _focus={{ boxShadow: 'outline' }}
        />
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
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
              <PrimaryNav
                width="100%"
                color="inherit"
                paddingX="600"
                _hover={{ color: 'gray.100', bg: 'gray.900' }}
                onClick={onClose}
              />
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

export default DrawerHeaderMenu;
