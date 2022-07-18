import { Box, Flex, Text, VisuallyHidden, useMediaQuery } from '@chakra-ui/react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import Padder from '../padder';
import DrawerHeaderMenu from './drawer-header-menu';
// import InlineHeaderMenu from './inline-header-menu';
import theme from '../theme';

export const responsiveHeaderWidth = {
  base: '100%',
  lg: '240px',
  xl: '320px',
};

const Header = () => {
  const [showInlineNav] = useMediaQuery(`(min-width: ${theme.breakpoints.md})`);

  return (
    <Padder
      as="header"
      textAlign="center"
      width="100%"
      maxWidth={responsiveHeaderWidth}
      marginX="auto"
    >
      <Flex wrap="wrap">
        <Box as="h1" maxWidth={{ base: '180px', lg: '100%' }}>
          <NextLink href="/">
            <a>
              <NextImage
                src="/images/principled-engineer-logo.png"
                width={471}
                height={240}
                alt=""
                aria-hidden
              />
              <VisuallyHidden>The Principled Engineer</VisuallyHidden>
            </a>
          </NextLink>
        </Box>
        {/* <Text
          color="gray.600"
          fontWeight="bold"
          fontFamily={theme.fonts.heading}
          whiteSpace="nowrap"
        >
          Code well. Code good.
        </Text> */}

        {/* {showInlineNav ? <InlineHeaderMenu /> : <DrawerHeaderMenu />} */}
        <DrawerHeaderMenu />
      </Flex>
    </Padder>
  );
};

export default Header;
