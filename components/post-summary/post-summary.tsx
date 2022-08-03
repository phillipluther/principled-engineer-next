import NextImage from 'next/image';
import NextLink from 'next/link';
import { VisuallyHidden } from 'react-aria';
import classnames from 'classnames';
import { PostProps } from '../../lib/posts';
import { formatDate } from '../../lib/utils';

import styles from './post-summary.module.css';
import { padded, displayFont, textified } from '../style-utils.module.css';

export type PostSummaryProps = PostProps & {
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4';
  className?: string;
};

const PostSummary = ({
  title,
  summary,
  published,
  slug,
  cover = '/images/social-card.jpg',
  headingLevel: Heading = 'h2',
  className,
}: PostSummaryProps) => {
  const postLink = `/blog/${slug}`;

  return (
    <article className={classnames(padded, textified, styles.wrapper, className)}>
      <header>
        <div className={styles.imageWrapper}>
          <NextImage
            src={cover}
            width={720}
            height={405}
            layout="fill"
            objectFit="cover"
            alt=""
            aria-hidden
          />
        </div>

        <Heading className={classnames(displayFont, styles.title)}>
          <NextLink href={postLink}>{title}</NextLink>
        </Heading>
        <p>{formatDate(published)}</p>
      </header>

      <section>
        <p>{summary}</p>
        <NextLink href={postLink}>
          <a className={styles.link} tabIndex={-1}>
            <VisuallyHidden>Read More: {title}</VisuallyHidden>
          </a>
        </NextLink>
      </section>
    </article>
  );
};

export default PostSummary;
