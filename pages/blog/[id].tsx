import NextHead from 'next/head';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { PostProps } from '../../lib/posts';
import { formatDate } from '../../lib/utils';
import Seo from '../../components/seo';

const PostPage = ({ title, summary, published, author }: PostProps) => {
  return (
    <Box as="article">
      <Seo title={title} description={summary} />

      <Container>...content...</Container>
    </Box>
  );
};

export default PostPage;
