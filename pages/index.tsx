import { getAllPostData, PostProps } from '../lib/posts';
import Seo from '../components/seo';
import PostList from '../components/post-list';

const title = 'The Principled Engineer: A Blog';
const description =
  'The Principled Engineer is a blog about building modern web applications with JavaScript, CSS, HTML, and the ecosystems associated with those technologies';

const AllPosts = ({ postsData }: { postsData: PostProps[] }) => {
  return (
    <>
      <Seo title={title} description={description} />

      <PostList postsData={postsData} title="All Posts" />
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
