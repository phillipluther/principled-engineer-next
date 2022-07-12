import Link from 'next/link';
import { Box, Wrap, WrapItem, Heading, Text } from '@chakra-ui/react';
import { getPostsData, PostProps } from '../../lib/posts';
import { formatDate } from '../../lib/utils';
import Seo from '../../components/seo';
import ContentHeader from '../../components/content-header';
import PostSummary from '../../components/post-summary';

const title = 'All Blog Posts';
const description =
  'A humble collection of articles spanning all blog categories, series, and motley topics pertaining to frontend engineering';

const AllPosts = ({ postsData }: { postsData: PostProps[] }) => {
  return (
    <>
      <Seo title={title} description={description} />
      <ContentHeader title={title} description={description} />

      <Wrap spacing="4" as="section">
        {postsData.map((postData) => (
          <WrapItem as="li" key={postData.slug}>
            <PostSummary {...postData} />
            {/* <Box as="article">
              <Box as="header">
                <Heading as="h2">
                  <Link href={`/blog/${postData.slug}`}>{postData.title}</Link>
                </Heading>
                <Text>
                  Published {formatDate(postData.published)} by {postData.author}
                </Text>
              </Box>

              {postData.summary && <Text>{postData.summary}</Text>}
            </Box> */}
          </WrapItem>
        ))}
      </Wrap>
    </>
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
