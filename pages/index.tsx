import Container from '../components/container';
import PostList from '../components/post-list';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Meta from '../components/meta';
import Post from '../types/post';

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  return (
    <Layout>
      <Meta />
      <Container>
        <h1>Hi</h1>
        <PostList posts={allPosts} />
      </Container>
    </Layout>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'coverImage', 'excerpt']);

  return {
    props: { allPosts },
  };
};
