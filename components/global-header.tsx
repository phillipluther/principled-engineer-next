import { Container, Flex, Heading, VisuallyHidden, useMediaQuery } from '@chakra-ui/react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import theme from './theme';
import SocialMenu from './social-menu';
import { SkipNavLink } from './skip-nav';
import { HorizontalNavMenu, DrawerNavMenu } from './nav-menu';

const GlobalHeader = () => {
  const [showFullNav] = useMediaQuery(`(min-width: ${theme.breakpoints.lg})`);

  return showFullNav ? (
    <Container size="lg" paddingY="400">
      <Flex justify="space-between" align="center">
        <Flex justify="start" align="center">
          <SkipNavLink label="Skip to Content" />

          <Heading as="h1" height="64px" width="130px" marginRight="500">
            <NextLink href="/" passHref>
              <a>
                <VisuallyHidden>The Principled Engineer</VisuallyHidden>
                <NextImage
                  src="/images/principled-engineer-header-logo.svg"
                  width={130}
                  height={64}
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
  ) : (
    <DrawerNavMenu />
  );
};

export default GlobalHeader;
