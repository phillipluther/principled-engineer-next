import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import cn from 'classnames';
import PrimaryNav from '../primary-nav';
import Logo from './principled-engineer-logo.svg';
import * as styles from './layout.module.scss';

const Layout = ({ children }) => {
  const { pathname } = useRouter();
  const TitleTag = pathname === '/' ? 'h1' : 'p';

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/images/social-card.jpg" />
        <meta name="og:title" content="The Principled Engineer" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        <TitleTag className={cn(styles.branding)}>
          <Link href="/">
            <a className={styles.logoLink}>
              <Logo className={styles.logo} />
            </a>
          </Link>
        </TitleTag>
        <nav>
          <PrimaryNav />
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
};

export default Layout;
