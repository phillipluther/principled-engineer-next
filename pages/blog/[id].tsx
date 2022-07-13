import NextHead from 'next/head';
import { Box, Container, Heading, Text } from '@chakra-ui/react';
import { PostProps, getPostPathParams, getPostData } from '../../lib/posts';
import { formatDate } from '../../lib/utils';
import Seo from '../../components/seo';
import ContentHeader from '../../components/content-header';

const PostPage = ({ postData }: { postData: PostProps }) => {
  const { title, summary, published, author } = postData;

  return (
    <Container size="lg" as="article">
      <Seo title={title} description={summary} />

      <ContentHeader title={title} description={summary} published={formatDate(published)} />

      <Container>...content...</Container>
    </Container>
  );
};

export default PostPage;

export async function getStaticProps({ params }) {
  return {
    props: {
      postData: getPostData(params.id),
    },
  };
}

export async function getStaticPaths() {
  const paths = getPostPathParams();
  return { paths, fallback: false };
}
