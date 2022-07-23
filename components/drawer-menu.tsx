import {
  Box,
  Center,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerHeader,
  DrawerContent,
  DrawerCloseButton,
  DrawerBody,
  Heading,
  VStack,
  useDisclosure,
} from '@chakra-ui/react';
import { MdOutlineMenu } from 'react-icons/md';
import { useRef } from 'react';
import NextImage from 'next/image';
import theme from './theme';
import Padder from './padder';
import PrimaryNav from './primary-nav';
import SocialMenu from './social-menu';

const DrawerMenu = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
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
        marginTop="400"
        marginRight="400"
        color="gray.700"
        _hover={{ bg: 'gray.800', color: 'gray.200' }}
        _expanded={{ bg: '#fff' }}
        _focus={{ boxShadow: 'outline' }}
      />

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent bg="gray.800" color="gray.200">
          <DrawerCloseButton aria-label="Close Navigation Menu" />

          <DrawerHeader>
            <Heading fontSize="sm" textTransform="uppercase">
              The Principled Engineer
            </Heading>
          </DrawerHeader>

          <DrawerBody padding="0">
            <Padder>
              <Box marginX="auto" opacity="30%" width="60%" height="56px" position="relative">
                <NextImage
                  src="/images/divider-flourish-alt.svg"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                  aria-hidden
                />
              </Box>

              <VStack>
                <PrimaryNav onDark onClick={onClose} fontSize="lg" />
              </VStack>
              <Box
                transform="rotate(180deg)"
                marginX="auto"
                opacity="30%"
                width="60%"
                height="56px"
                position="relative"
              >
                <NextImage
                  src="/images/divider-flourish-alt.svg"
                  layout="fill"
                  objectFit="contain"
                  alt=""
                  aria-hidden
                />
              </Box>

              <Center marginTop="500">
                <SocialMenu onDark />
              </Center>
            </Padder>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default DrawerMenu;
