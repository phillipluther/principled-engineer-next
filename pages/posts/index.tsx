import Link from 'next/link';
import { Box, Wrap, WrapItem, Heading, Text } from '@chakra-ui/react';
import { getPostsData, PostProps } from '../../lib/posts';
import { formatDate } from '../../lib/utils';
import Seo from '../../components/seo';

const title = 'All Blog Posts';
const description = 'A collection of blog posts from all categories, series, and topics.';

const AllPosts = ({ postsData }: { postsData: PostProps[] }) => {
  return (
    <Wrap spacing="4">
      <Seo title={title} description={description} />

      {postsData.map((postData) => (
        <WrapItem as="li" key={postData.slug}>
          <Box as="article">
            <Box as="header">
              <Heading as="h2">
                <Link href={`/posts/${postData.slug}`}>{postData.title}</Link>
              </Heading>
              <Text>
                Published {formatDate(postData.published)} by {postData.author}
              </Text>
            </Box>

            {postData.summary && <Text>{postData.summary}</Text>}
          </Box>
        </WrapItem>
      ))}
    </Wrap>
  );
};

AllPosts.title = title;
AllPosts.description = description;

export default AllPosts;

export async function getStaticProps() {
  const postsData = getPostsData();

  return {
    props: {
      postsData,
    },
  };
}
