import { Box, Flex, VStack, Container, VisuallyHidden, Text, HStack } from '@chakra-ui/react';
import Padder from './padder';
import PrimaryNav from './primary-nav';
import SocialMenu from './social-menu';

const Footer = () => (
  <Padder as="footer" bg="gray.800" color="gray.300">
    <VisuallyHidden as="h2">Site Footer</VisuallyHidden>
    <VStack align="center" spacing="0">
      <Flex as="section">
        <VisuallyHidden as="h3">Supplemental Navigation</VisuallyHidden>
        <HStack marginTop="500">
          <PrimaryNav onDark />
        </HStack>
      </Flex>
      <Flex as="section" color="brand.700">
        <VisuallyHidden as="h3">Never Miss a Post!</VisuallyHidden>
        <SocialMenu onDark />
      </Flex>

      <Padder noX noBottom>
        <Container layerStyle="textBlock" fontSize="sm" as="section">
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
      </Padder>
    </VStack>
  </Padder>
);

export default Footer;
