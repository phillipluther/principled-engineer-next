import Footer from './footer';
import Meta from '../meta';

const Layout = ({ children }: { children: React.ReactNode }) => (
  <>
    <Meta />
    <div className="min-h-screen">
      <main>{children}</main>
    </div>
    <Footer />
  </>
);

export default Layout;
