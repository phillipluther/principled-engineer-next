import classnames from 'classnames';
import Header from './header';
import Footer from './footer';
import { SkipNavTarget } from './skip-nav';
import { padded, contained } from './style-utils.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main className={classnames(padded, contained)}>
        <SkipNavTarget />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
