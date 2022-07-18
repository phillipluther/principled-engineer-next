import { HStack, Flex, Container } from '@chakra-ui/react';
import PrimaryNav from '../primary-nav';
import { SkipNavLink } from '../skip-nav';
import SocialMenu from '../social-menu';

const InlineHeaderMenu = ({ ...props }: { [key: string]: any }) => (
  <Container size="lg" paddingY="400">
    <Flex justify="space-between" align="center">
      <Flex justify="start" align="center">
        <SkipNavLink label="Skip to Content" />

        <HStack spacing="2" {...props}>
          <PrimaryNav showHome={false} />
        </HStack>
      </Flex>

      <SocialMenu />
    </Flex>
  </Container>
);

export default InlineHeaderMenu;
