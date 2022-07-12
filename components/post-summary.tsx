import { Container, Box, Heading, Text, VisuallyHidden } from '@chakra-ui/react';
import NextLink from 'next/link';
// import NextImage from 'next/image';
import { PostProps } from '../lib/posts';
import { formatDate } from '../lib/utils';

export type PostSummaryProps = PostProps & {
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4';
};

const PostSummary = ({
  title,
  summary,
  published,
  slug,
  headingLevel = 'h2',
}: PostSummaryProps) => (
  <Container as="article" layerStyle="textBlock">
    <Box as="header" color="gray.600">
      <Heading as={headingLevel}>
        <NextLink href={`/blog/${slug}`}>{title}</NextLink>
      </Heading>
      <Text>{formatDate(published)}</Text>
    </Box>
    <Box as="section" color="gray.700">
      <Text>{summary}</Text>
    </Box>
    <Box as="footer">
      <NextLink href={`/blog/${slug}`}>
        <a>
          Read More <VisuallyHidden>: {title}</VisuallyHidden>
        </a>
      </NextLink>
    </Box>
  </Container>
);

export default PostSummary;
