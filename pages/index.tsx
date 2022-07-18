import { Container, Wrap, WrapItem } from '@chakra-ui/react';
import { getAllPostData, PostProps } from '../lib/posts';
import Seo from '../components/seo';
import ContentHeader from '../components/content-header';
import PostSummary from '../components/post-summary';
import theme from '../components/theme';

const title = 'The Principled Engineer: A Blog';
const description =
  'The Principled Engineer is a blog about building modern web applications with JavaScript, CSS, HTML, and the ecosystems associated with those technologies';

const AllPosts = ({ postsData }: { postsData: PostProps[] }) => {
  return (
    <>
      <Seo title={title} description={description} />
      <ContentHeader title={title} description={description} />

      <Container as="section" size="lg">
        <Wrap spacing={{ base: 600, xl: 700 }}>
          {postsData.map((postData) => (
            <WrapItem
              as="li"
              key={postData.slug}
              width={{
                base: '100%',
                md: `calc(50% - ${theme.space['600']})`,
                xl: `calc(33% - ${theme.space['700']})`,
              }}
            >
              <PostSummary {...postData} />
            </WrapItem>
          ))}
        </Wrap>
      </Container>
    </>
  );
};

AllPosts.title = title;
AllPosts.description = description;

export default AllPosts;

export async function getStaticProps() {
  const postsData = getAllPostData();

  return {
    props: {
      postsData,
    },
  };
}
