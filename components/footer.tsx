import { Box, Flex, VStack, Container, VisuallyHidden, Text, HStack } from '@chakra-ui/react';
import PrimaryNav from './primary-nav';
import SocialMenu from './social-menu';

const Footer = () => (
  <Box as="footer" bg="gray.100" layerStyle="padded">
    <VisuallyHidden as="h2">Site Footer</VisuallyHidden>
    <VStack align="center" spacing="0">
      <Flex as="section">
        <VisuallyHidden as="h3">Supplemental Navigation</VisuallyHidden>
        <HStack>
          <PrimaryNav />
        </HStack>
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
          All Principled Engineer content is Copyright &copy; {new Date().getFullYear()} by Phillip
          Luther unless otherwise specified.
        </Text>
        <Text>
          The opinions expressed on the Principled Engineer belong to me, Phillip Luther, and do not
          necessarily reflect the views or opinions of any associated organizations or corporate
          entities.
        </Text>
      </Container>
    </VStack>
  </Box>
);

export default Footer;
