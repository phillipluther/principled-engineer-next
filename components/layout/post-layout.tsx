import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { PostProps } from '../../lib/posts';
import { formatDate } from '../../lib/utils';

const PageLayout = ({ title, summary, published, author }: PostProps) => {
  return (
    <>
      <Box as="header">
        <Container size="lg">
          <Heading as="h1">{title}</Heading>
          <Text>
            Published {formatDate(published)} by {author}
          </Text>
          <Text size="md">{summary}</Text>
        </Container>
      </Box>
      <Box as="main">
        <Container></Container>
      </Box>
    </>
  );
};
