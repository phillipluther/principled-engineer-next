import {
  SkipNavLink as ChakraSkipNavLink,
  SkipNavContent as ChakraSkipNavContent,
} from '@chakra-ui/skip-nav';

export const skipNavId = 'skip-nav';

const SkipNavLink = ({ id = skipNavId, label }: { id?: string; label: string }) => (
  <ChakraSkipNavLink id={id} zIndex="100">
    {label}
  </ChakraSkipNavLink>
);

const SkipNavTarget = ({ id = skipNavId }: { id?: string }) => <ChakraSkipNavContent id={id} />;

export { SkipNavLink, SkipNavTarget };
