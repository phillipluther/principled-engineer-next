import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dracula as theme } from 'react-syntax-highlighter/dist/esm/styles/prism';
import NextImage from 'next/image';
import classnames from 'classnames';
import styles from './content.module.css';

export type ContentProps = {
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
  code({ node, inline, className, children, ...props }) {
    const match = /language-(\w+)/.exec(className || '');

    return !inline && match ? (
      <SyntaxHighlighter
        children={String(children).replace(/\n$/, '')}
        style={theme}
        language={match[1]}
        PreTag="div"
        {...props}
      />
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

const Content = ({ children, markdown, className, as: Tag = 'section' }: ContentProps) => {
  return (
    <Tag className={classnames(styles.wrapper, className)}>
      {markdown && (
        <ReactMarkdown
          children={markdown}
          rehypePlugins={[rehypeRaw]}
          components={MarkdownComponents}
        />
      )}
      {children}
    </Tag>
  );
};

export default Content;
