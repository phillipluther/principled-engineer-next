import Head from 'next/head';
import Layout from '../components/layout';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>About</title>
        <meta name="description" content="All about this blog" />
      </Head>
      <h1>About</h1>
      <p>Helpful info about the blog and the blog's maker.</p>
    </Layout>
  );
}
