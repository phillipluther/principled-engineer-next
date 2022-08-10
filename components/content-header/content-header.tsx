import NextImage from 'next/image';
import classnames from 'classnames';
import Flourish from '../flourish';

import styleUtils from '../style-utils.module.css';
import styles from './content-header.module.css';

export type ContentHeaderProps = {
  as?: keyof JSX.IntrinsicElements;
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4';
  title: React.ReactNode;
  description?: string;
  published?: string;
  image?: {
    src: string;
    alt: string;
    credit?: string;
    creditLink?: string;
  };
  [key: string]: unknown;
};

const { displayFont, flipped } = styleUtils;

const ContentHeader = ({
  as: Tag = 'header',
  headingLevel: Heading = 'h1',
  title,
  description,
  published,
  image,
  ...props
}: ContentHeaderProps) => {
  return (
    <Tag className={styles.wrapper} {...props}>
      <Flourish className={styles.flourish} />

      <Heading className={classnames(displayFont, styles.title)}>{title}</Heading>

      {published && <p className={styles.date}>{published}</p>}

      {description && (
        <>
          <Flourish className={classnames(styles.flourish, flipped)} />
          <p className={styles.description}>{description}</p>
        </>
      )}

      {!description && <Flourish className={classnames(styles.flourish, flipped)} />}

      {image && (
        <figure className={styles.image}>
          <NextImage
            src={image.src}
            alt={image.alt || title.toString()}
            width={1248}
            height={702}
          />

          {image.credit && (
            <figcaption className={styles.credit}>
              <>
                Cover image by{` `}
                {image.creditLink ? (
                  <a href={image.creditLink}>{image.credit}</a>
                ) : (
                  <span>{image.credit}</span>
                )}
              </>
            </figcaption>
          )}
        </figure>
      )}
    </Tag>
  );
};

export default ContentHeader;
