import Head from 'next/head';
import Link from 'next/link';
import * as styles from './layout.module.css';

const Layout = ({ children }) => (
  <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <header className={styles.header}>
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
    <main className={styles.main}>{children}</main>
    <footer className={styles.footer}>
      <p>
        The Footer. Not a footer, but <em>the</em> Footer.
      </p>
    </footer>
  </>
);

export default Layout;
