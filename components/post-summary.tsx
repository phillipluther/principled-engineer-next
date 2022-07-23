import { Box, Flex, Heading, Text, LinkBox, LinkOverlay, VisuallyHidden } from '@chakra-ui/react';
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
    <LinkBox as="article" display="flex" flexDirection="column">
      <Box as="header" padding="500" order="2">
        <Heading
          as={headingLevel}
          fontSize={{ base: '2xl' }}
          marginBottom="4"
          // fontSize={{ base: '2xl', sm: '3xl', md: '2xl', lg: '3xl', xl: '2xl' }}
        >
          <NextLink href={postLink}>{title}</NextLink>
        </Heading>
        <Text color="gray.600">{formatDate(published)}</Text>
      </Box>
      <Box as="section" padding="500" paddingTop="0" order="3">
        <Text>{summary}</Text>
      </Box>

      {/* <Divider marginY="400" order="4" /> */}

      <NextImage src={cover} width={720} height={405} alt="" aria-hidden />

      <NextLink href={postLink}>
        <LinkOverlay />
      </NextLink>
    </LinkBox>
  );
};

export default PostSummary;
