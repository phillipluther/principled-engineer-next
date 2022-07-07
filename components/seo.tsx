import Head from 'next/head';

export type SeoProps = {
  title?: string;
  description?: string;
  keywords?: string[];
  children?: React.ReactNode;
};

export const defaultTitle = 'The Principled Engineer';
export const defaultDescription =
  'A blog about building modern web applications with JavaScript, CSS and HTML';

const Seo = ({
  title = defaultTitle,
  description = defaultDescription,
  keywords,
  children,
}: SeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href="/favicon.ico" />

      {keywords && <meta name="keywords" content={keywords.join(',')} />}

      {children}
    </Head>
  );
};

export default Seo;
