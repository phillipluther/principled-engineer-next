import NextImage from 'next/image';

export type ContentHeaderProps = {
  as?: keyof JSX.IntrinsicElements;
  headingLevel?: 'h1' | 'h2' | 'h3' | 'h4';
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
  [key: string]: any;
};

const Flourish = () => (
  <div>
    <NextImage src="/images/divider-flourish.svg" width={518} height={48} />
  </div>
);

const ContentHeader = ({
  as: Tag = 'header',
  headingLevel: Heading = 'h1',
  title,
  description,
  children,
  ...props
}: ContentHeaderProps) => {
  return (
    <Tag {...props}>
      <Flourish />

      <Heading>{title}</Heading>

      {description && (
        <>
          <Flourish />
          <p>{description}</p>
        </>
      )}

      {!description && <Flourish />}

      {children}
    </Tag>
  );
};

export default ContentHeader;
