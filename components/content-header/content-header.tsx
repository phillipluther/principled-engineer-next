import NextImage from 'next/image';
import classnames from 'classnames';

import { displayFont, flipped } from '../style-utils.module.css';
import styles from './content-header.module.css';

export type ContentHeaderProps = {
  as?: keyof JSX.IntrinsicElements;
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4';
  title: React.ReactNode;
  description?: string;
  published?: string;
  children?: React.ReactNode;
  [key: string]: any;
};

const Flourish = ({ className }: { className?: string }) => (
  <div className={classnames(styles.flourish, className)}>
    <NextImage src="/images/divider-flourish.svg" width={518} height={48} aria-hidden alt="" />
  </div>
);

const ContentHeader = ({
  as: Tag = 'header',
  headingLevel: Heading = 'h1',
  title,
  description,
  published,
  children,
  ...props
}: ContentHeaderProps) => {
  return (
    <Tag {...props}>
      <Flourish />

      <Heading className={classnames(displayFont, styles.title)}>{title}</Heading>

      <p className={styles.date}>{published}</p>

      {description && (
        <>
          <Flourish className={flipped} />
          <p className={styles.description}>{description}</p>
        </>
      )}

      {!description && <Flourish className={flipped} />}

      {children}
    </Tag>
  );
};

export default ContentHeader;
