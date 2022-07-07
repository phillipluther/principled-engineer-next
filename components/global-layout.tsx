import {
  Box,
  Flex,
  Heading,
  Container,
  HStack,
  VStack,
  Text,
  VisuallyHidden,
} from '@chakra-ui/react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { HorizontalNavMenu, DrawerNavMenu } from './nav-menu';
import SocialMenu from './social-menu';
import { SkipNavLink, SkipNavTarget } from './skip-nav';

export type GlobalLayoutProps = {
  header?: React.ReactElement;
};

const GlobalLayout = ({ header: CustomHeader, children }) => {
  return (
    <>
      <Box as="header" width="100vw">
        {CustomHeader ? (
          <CustomHeader />
        ) : (
          <Container size="lg">
            <Flex justify="space-between" align="center">
              <Flex justify="start" align="center">
                <SkipNavLink label="Skip to Content" />

                <Heading as="h1" height="48px" width="48px" marginRight="500">
                  <NextLink href="/" passHref>
                    <a>
                      <VisuallyHidden>The Principled Engineer</VisuallyHidden>
                      <NextImage
                        src="/images/badge.png"
                        width={48}
                        height={48}
                        aria-hidden
                        alt=""
                      />
                    </a>
                  </NextLink>
                </Heading>

                <HorizontalNavMenu home={false} />
              </Flex>

              <SocialMenu />
            </Flex>
          </Container>
        )}
      </Box>

      <Box as="main">
        <SkipNavTarget />
        {children}
      </Box>

      <Box as="footer" bg="gray.100" layerStyle="padded">
        <VisuallyHidden as="h2">Site Footer</VisuallyHidden>
        <VStack align="center" spacing="0">
          <Flex as="section">
            <VisuallyHidden as="h3">Supplemental Navigation</VisuallyHidden>
            <HorizontalNavMenu color="brand.700" />
          </Flex>
          <Flex as="section" color="brand.700">
            <VisuallyHidden as="h3">Never Miss a Post!</VisuallyHidden>
            <SocialMenu />
          </Flex>

          <Container
            padding="0"
            paddingTop={{ base: 600, md: 700 }}
            layerStyle="textBlock"
            fontSize="sm"
            as="section"
          >
            <VisuallyHidden as="h3">Legal Information and Disclaimers</VisuallyHidden>
            <Text>
              All Principled Engineer content is Copyright &copy; {new Date().getFullYear()} by
              Phillip Luther unless otherwise specified.
            </Text>
            <Text>
              The opinions expressed on the Principled Engineer belong to me, Phillip Luther, and do
              not necessarily reflect the views or opinions of any associated organizations or
              corporate entities.
            </Text>
          </Container>
        </VStack>
      </Box>
    </>
  );
};

export default GlobalLayout;
