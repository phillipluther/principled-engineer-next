import { Box, Container, Heading, Text } from '@chakra-ui/react';
import NextImage from 'next/image';
import theme from './theme';

export type ContentHeaderProps = {
  as?: keyof JSX.IntrinsicElements;
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4';
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
  [key: string]: any;
};

const Flourish = ({ flip = false }) => (
  <Box
    maxWidth="518px"
    minWidth="200px"
    width="75%"
    marginY={{ base: 500, md: 600 }}
    marginX="auto"
    opacity="0.6"
    transform={flip ? 'rotate(180deg)' : ''}
  >
    <NextImage src="/images/divider-flourish.svg" width={518} height={48} />
  </Box>
);

const ContentHeader = ({
  as = 'header',
  headingLevel = 'h1',
  title,
  description,
  children,
  ...props
}: ContentHeaderProps) => {
  return (
    <Box as={as} paddingBottom={{ base: 600, md: 700 }} {...props}>
      <Container size={{ base: 'sm', xl: 'md' }} textAlign="center">
        <Flourish />

        <Heading
          as={headingLevel}
          color="gray.600"
          fontWeight="500"
          textTransform="uppercase"
          textShadow={`1px 1px 0px ${theme.colors.gray['800']}`}
          fontSize={{ base: '5xl', sm: '6xl', md: '7xl', xl: '8xl' }}
        >
          {title}
        </Heading>

        {description && (
          <>
            <Flourish flip />
            <Text
              fontSize={{ base: 'lg', md: 'xl', xl: '2xl' }}
              fontStyle="italic"
              color="gray.600"
              lineHeight="tall"
            >
              {description}
            </Text>
          </>
        )}

        {!description && <Flourish flip />}
      </Container>

      {children}
    </Box>
  );
};

export default ContentHeader;
