import { Box, Flex, Heading, Text, VisuallyHidden } from '@chakra-ui/react';
import NextImage from 'next/image';
import NextLink from 'next/link';
import { PostProps } from '../lib/posts';
import { formatDate } from '../lib/utils';

export type PostSummaryProps = PostProps & {
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4';
};

const PostSummary = ({
  title,
  summary,
  published,
  slug,
  cover = '/images/social-card.jpg',
  headingLevel = 'h2',
}: PostSummaryProps) => {
  const postLink = `/blog/${slug}`;

  return (
    <Box as="article" layerStyle="summaryBlock">
      <Flex as="header" color="gray.600" direction="column">
        <Heading
          as={headingLevel}
          fontSize={{ base: '2xl', sm: '3xl', md: '2xl', lg: '3xl', xl: '2xl' }}
          order="2"
        >
          <NextLink href={postLink}>{title}</NextLink>
        </Heading>
        <Text order="3">{formatDate(published)}</Text>

        <NextLink href={postLink}>
          <a tabIndex={-1}>
            <NextImage src={cover} width={752} height={423} alt="" aria-hidden />
          </a>
        </NextLink>
      </Flex>
      <Box as="section" color="gray.700">
        <Text>{summary}</Text>
      </Box>
      <Box as="footer">
        <NextLink href={postLink}>
          <a>
            Read More <VisuallyHidden>: {title}</VisuallyHidden>
          </a>
        </NextLink>
      </Box>
    </Box>
  );
};

export default PostSummary;
