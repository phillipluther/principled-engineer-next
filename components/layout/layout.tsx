import Header from './header';
import Footer from './footer';
import Meta from '../meta';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Meta />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default Layout;
