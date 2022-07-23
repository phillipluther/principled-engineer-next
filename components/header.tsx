import { Box, Text, Flex, HStack, VStack, VisuallyHidden, useMediaQuery } from '@chakra-ui/react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import Padder from './padder';
import DrawerMenu from './drawer-menu';
import theme from './theme';
import PrimaryNav from './primary-nav';
import SocialMenu from './social-menu';
import { SkipNavLink } from './skip-nav';

export const responsiveHeaderWidth = {
  base: '100%',
  lg: '240px',
  xl: '288px',
};

const Header = () => {
  const [isMediumWidth, isLargeWidth] = useMediaQuery([
    `(min-width: ${theme.breakpoints.md})`,
    `(min-width: ${theme.breakpoints.lg})`,
  ]);

  return (
    <Padder
      as="header"
      textAlign="center"
      width="100%"
      maxWidth={responsiveHeaderWidth}
      marginX="auto"
      position={{ base: 'relative', lg: 'fixed' }}
    >
      {isMediumWidth && <SkipNavLink label="Skip to Content" />}

      <Flex wrap="wrap" justify="space-between">
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
        {!isMediumWidth && !isLargeWidth && <DrawerMenu />}
        {isMediumWidth && !isLargeWidth && (
          <Flex justify="space-between" align="center">
            <HStack marginRight="700">
              <PrimaryNav />
            </HStack>
            <SocialMenu />
          </Flex>
        )}
        {isLargeWidth && (
          <VStack width="100%">
            <Text
              marginTop="500"
              fontSize={{ base: 'xs', xl: 'sm' }}
              fontWeight="bold"
              fontFamily={theme.fonts.heading}
              color="gray.500"
            >
              Code well. Code good.
            </Text>
            <Box width="100%" height="64px" position="relative" opacity="50%">
              <NextImage src="/images/divider-flourish-alt.svg" layout="fill" objectFit="contain" />
            </Box>

            <VStack width="100%">
              <PrimaryNav width="100%" />
            </VStack>

            <Box
              width="100%"
              height="64px"
              position="relative"
              transform="rotate(180deg)"
              opacity="50%"
            >
              <NextImage src="/images/divider-flourish-alt.svg" layout="fill" objectFit="contain" />
            </Box>

            <SocialMenu />
          </VStack>
        )}
      </Flex>
    </Padder>
  );
};

export default Header;
