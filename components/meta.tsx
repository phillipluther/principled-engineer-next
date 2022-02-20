import Head from 'next/head';

const Meta = ({ children }: { children?: React.ReactNode }) => {
  return (
    <Head>
      <title>The Principled Engineer</title>
      <meta name="description" content="A default description. TODO this to something better!" />
      // app'ish
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="shortcut icon" href="/favicon/favicon.ico" />
      <meta name="msapplication-TileColor" content="#44403C" />
      <meta name="theme-color" content="#44403C" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      // SEO + Social
      <meta property="og:image" content="/assets/social-card.png" />
      {children}
    </Head>
  );
};

export default Meta;
