import { SkipNavContent } from '@chakra-ui/skip-nav';
import { Box, Flex, Container, VStack, Text, VisuallyHidden } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import NavMenu, { primaryNavItems } from './nav-menu';
import SocialMenu from './social-menu';

const NavbarLayout = ({ children }) => {
  const router = useRouter();
  const isHome = router.asPath === '/';

  return (
    <>
      <Box as="header">
        {isHome && <VisuallyHidden as="h1">The Principled Engineer</VisuallyHidden>}

        <NavMenu />
      </Box>
      <Box as="main">
        <SkipNavContent id="skip-to-content" />
        {children}
      </Box>

      <Box as="footer" bg="gray.100" layerStyle="padded">
        <VisuallyHidden as="h2">Site Footer</VisuallyHidden>
        <VStack align="center" spacing="8">
          <Flex>
            <VisuallyHidden as="h3">Supplemental Navigation</VisuallyHidden>
            {primaryNavItems.map(({ label, href }) => (
              <Text marginRight="4" textStyle="link" key={href}>
                <NextLink href={href}>{label}</NextLink>
              </Text>
            ))}
          </Flex>
          <Flex color="brand.700">
            <VisuallyHidden as="h3">Follow the Principled Engineer</VisuallyHidden>
            <SocialMenu />
          </Flex>

          <Container margin="0" padding="0" layerStyle="textBlock" fontSize="sm" as="section">
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

export default NavbarLayout;
