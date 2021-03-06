import Seo from '../components/seo';
import ContentHeader from '../components/content-header';

const title = 'About';
const description =
  'On both the Principled Engineer as a website and on its author, Phillip Luther';

const AboutPage = () => (
  <>
    <Seo title={title} description={description} />
    <ContentHeader title={title} description={description} />

    <p>Content</p>
  </>
);

export default AboutPage;
