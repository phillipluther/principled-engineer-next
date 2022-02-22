import Head from 'next/head';
import Layout from '../components/layout';

export default function Contact() {
  return (
    <Layout>
      <Head>
        <title>Contact</title>
        <meta name="description" content="Contact info for this blog" />
      </Head>
      <h1>Contact</h1>
      <p>Helpful info about the blog and the blog's maker.</p>
    </Layout>
  );
}
