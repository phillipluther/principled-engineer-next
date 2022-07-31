import { OverlayProvider } from 'react-aria';
import { SSRProvider } from 'react-aria';
import '@fontsource/merriweather/400.css';
import '@fontsource/merriweather/700.css';
import '@fontsource/lora/500.css';
import Layout from '../components/layout';

import 'reset.css';
import '../components/global-styles.css';

const App = ({ Component, pageProps }) => {
  return (
    <SSRProvider>
      <OverlayProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </OverlayProvider>
    </SSRProvider>
  );
};
export default App;
