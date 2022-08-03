import Header from './header';
import Footer from './footer';
import { SkipNavTarget } from './skip-nav';
import { padded } from './style-utils.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main className={padded}>
        <SkipNavTarget />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
