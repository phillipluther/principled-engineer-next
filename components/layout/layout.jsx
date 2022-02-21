import Head from 'next/head';
import Link from 'next/link';

const Layout = ({ children }) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header>
      <nav>
        <ul>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
    <main>{children}</main>
    <footer>
      <p>
        The Footer. Not a footer, but <em>the</em> Footer.
      </p>
    </footer>
  </>
);

export default Layout;
