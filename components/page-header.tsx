import { Box, Container } from '@chakra-ui/react';

export type PageHeaderProps = {
  tag?: keyof JSX.IntrinsicElements;
  children?: React.ReactNode;
};

const PageHeader = ({ tag = 'div', children, ...props }: PageHeaderProps) => (
  <Box as={tag as keyof JSX.IntrinsicElements} {...props}>
    <Container size="lg">{children}</Container>
  </Box>
);

export default PageHeader;
