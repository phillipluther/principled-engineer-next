import { SkipNavContent } from '@chakra-ui/skip-nav';
import { Box, Flex, Container, VStack, IconButton, Text, VisuallyHidden } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';
import NavMenu, { primaryNavItems, socialItems } from './nav-menu';

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
          <Flex>
            <VisuallyHidden as="h3">Follow the Principled Engineer</VisuallyHidden>
            {socialItems.map(({ label, href, icon: Icon }) => (
              <IconButton
                as="a"
                icon={<Icon />}
                aria-label={label}
                variant="link"
                fontSize="24px"
                padding="12px"
                color="brand.700"
                _hover={{ color: 'brand.900' }}
                href={href}
                key={href}
              />
            ))}{' '}
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
