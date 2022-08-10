import classnames from 'classnames';
import Header from './header';
import Footer from './footer';
import { SkipNavTarget } from './skip-nav';
import styleUtils from './style-utils.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      <main className={classnames(styleUtils.padded, styleUtils.contained)}>
        <SkipNavTarget />
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
