import ReactMarkdown from 'react-markdown';
import NextImage from 'next/image';
import classnames from 'classnames';
import styles from './post-content.module.css';

export type PostContentProps = {
  markdown?: string;
  className?: string;
  children?: React.ReactNode;
  as?: keyof JSX.IntrinsicElements;
};

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

const PostContent = ({ children, markdown, className, as: Tag = 'section' }: PostContentProps) => {
  return (
    <section className={classnames(styles.wrapper, className)}>
      {markdown && <ReactMarkdown children={markdown} components={MarkdownComponents} />}
      {children}
    </section>
  );
};

export default PostContent;
