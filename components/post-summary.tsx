import NextImage from 'next/image';
import NextLink from 'next/link';
import { VisuallyHidden } from 'react-aria';
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
  headingLevel: Heading = 'h2',
}: PostSummaryProps) => {
  const postLink = `/blog/${slug}`;

  return (
    <article>
      <header>
        <NextImage src={cover} width={720} height={405} alt="" aria-hidden />

        <Heading>
          <NextLink href={postLink}>{title}</NextLink>
        </Heading>
        <p>{formatDate(published)}</p>
      </header>

      <section>
        <p>{summary}</p>
        <NextLink href={postLink}>
          <a>
            <VisuallyHidden>Read More: {title}</VisuallyHidden>
          </a>
        </NextLink>
      </section>
    </article>
  );
};

export default PostSummary;
