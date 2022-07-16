import { Box, Container, Heading, Text } from '@chakra-ui/react';
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
        <Box
          as="figure"
          position="relative"
          width="100%"
          paddingBottom="57%"
          marginBottom="1.618rem"
        >
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
  const { title, summary, published, cover, cover_credit, cover_credit_link, cover_alt } = postData;

  return (
    <Container size="lg" as="article">
      <Seo title={title} description={summary} />

      <ContentHeader title={title} description={summary} published={formatDate(published)}>
        {cover && (
          <Box
            as="figure"
            position="relative"
            width={{ base: '100vw', md: '100%' }}
            marginTop="600"
            marginLeft={{ base: '-600', md: '0' }}
            marginRight={{ base: '-600', md: '0' }}
          >
            <NextImage src={cover} alt={cover_alt || title} width={1248} height={702} />

            {cover_credit && (
              <Text
                as="figcaption"
                fontSize="sm"
                color="gray.600"
                marginLeft={{ base: '600', xl: 0 }}
              >
                <>
                  Cover image by{` `}
                  {cover_credit_link ? (
                    <a href={cover_credit_link}>{cover_credit}</a>
                  ) : (
                    { cover_credit }
                  )}
                </>
              </Text>
            )}
          </Box>
        )}
      </ContentHeader>

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
