import Head from 'next/head';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
        <meta name="description" content="A description of the home page" />
      </Head>
      <h1>Home</h1>
      <p>This'll be the home page.</p>
    </Layout>
  );
}
