import Seo from '../components/seo';
import ContentHeader from '../components/content-header';

const title = 'Contact';
const description =
  'Methods employed to contact the author and maintainer of The Principled Engineer';

const AboutPage = () => (
  <>
    <Seo title={title} description={description} />
    <ContentHeader title={title} description={description} />

    <p>Content</p>
  </>
);

export default AboutPage;
