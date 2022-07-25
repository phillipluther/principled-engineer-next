import Header from './header';
import Footer from './footer';
import Padder from './padder';
import { SkipNavTarget } from './skip-nav';

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <Padder as="main">
        <SkipNavTarget />
        {children}
      </Padder>
      <Footer />
    </>
  );
};

export default Layout;
