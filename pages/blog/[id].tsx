import ReactMarkdown from 'react-markdown';
import NextImage from 'next/image';
import { PostProps, getPostPathParams, getPostData } from '../../lib/posts';
import { formatDate } from '../../lib/utils';
import Seo from '../../components/seo';
import ContentHeader from '../../components/content-header';

const MarkdownComponents = {
  p: (paragraph: { children?: boolean; node?: any }) => {
    const { node } = paragraph;

    if (node.children[0].tagName === 'img') {
      const image = node.children[0];
      return (
        <figure>
          <NextImage
            src={image.properties.src}
            alt={image.properties.alt}
            layout="fill"
            objectFit="cover"
          />
        </figure>
      );
    }

    return <p>{paragraph.children}</p>;
  },
};

const PostPage = ({ postData }: { postData: PostProps }) => {
  const { title, summary, published, cover, cover_credit, cover_credit_link, cover_alt } = postData;

  return (
    <article>
      <Seo title={title} description={summary} />

      <ContentHeader title={title} description={summary} published={formatDate(published)}>
        {cover && (
          <figure>
            <NextImage src={cover} alt={cover_alt || title} width={1248} height={702} />

            {cover_credit && (
              <figcaption>
                <>
                  Cover image by{` `}
                  {cover_credit_link ? (
                    <a href={cover_credit_link}>{cover_credit}</a>
                  ) : (
                    { cover_credit }
                  )}
                </>
              </figcaption>
            )}
          </figure>
        )}
      </ContentHeader>

      <div>
        <ReactMarkdown children={postData.markdown} components={MarkdownComponents} />
      </div>
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
