import { Box, Container, Heading, Text } from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import NextImage from 'next/image';
import { PostProps, getPostPathParams, getPostData } from '../../lib/posts';
import { formatDate } from '../../lib/utils';
import Seo from '../../components/seo';
import ContentHeader from '../../components/content-header';

// const renderers = {
//   image: (props) => {
//     return <NextImage src={props.src} alt={props.alt} layout="fill" />;
//   },
// };

const MarkdownComponents = {
  p: (paragraph: { children?: boolean; node?: any }) => {
    const { node } = paragraph;

    if (node.children[0].tagName === 'img') {
      const image = node.children[0];
      return (
        <Box position="relative" width="100%" paddingBottom="57%" marginBottom="1.618rem">
          <NextImage
            src={image.properties.src}
            alt={image.properties.alt}
            layout="fill"
            objectFit="cover"
          />
        </Box>
      );
    }

    return <p>{paragraph.children}</p>;
  },
};

const PostPage = ({ postData }: { postData: PostProps }) => {
  const { title, summary, published, html } = postData;

  return (
    <Container size="lg" as="article">
      <Seo title={title} description={summary} />

      <ContentHeader title={title} description={summary} published={formatDate(published)} />

      <Container size="sm" fontSize="lg" layerStyle="textBlock">
        <ReactMarkdown children={postData.markdown} components={MarkdownComponents} />
      </Container>
    </Container>
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
