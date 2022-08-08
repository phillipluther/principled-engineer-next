import { PostProps, getPostPathParams, getPostData } from '../../lib/posts';
import { formatDate } from '../../lib/utils';
import Seo from '../../components/seo';
import ContentHeader from '../../components/content-header';
import Content from '../../components/content';
import Bio from '../../components/bio';

const PostPage = ({ postData }: { postData: PostProps }) => {
  const { title, summary, published, cover, cover_credit, cover_credit_link, cover_alt } = postData;

  return (
    <article>
      <Seo title={title} description={summary} />

      <ContentHeader
        title={title}
        description={summary}
        published={formatDate(published)}
        image={{ src: cover, alt: cover_alt, credit: cover_credit, creditLink: cover_credit_link }}
      />

      <Content markdown={postData.markdown} />

      <Bio />
      <footer />
    </article>
  );
};

export default PostPage;

export async function getStaticProps({ params }) {
  return {
    props: {
      postData: await getPostData(params.id),
    },
  };
}

export async function getStaticPaths() {
  const paths = getPostPathParams();
  return { paths, fallback: false };
}
