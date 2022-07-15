import Seo from '../components/seo';
import ContentHeader from '../components/content-header';

const title = 'Page Not Found';
const description = "The requested page does not it exist; more accurately, it doesn't exist here";

const NotFoundPage = () => (
  <>
    <Seo title={title} description={description} />
    <ContentHeader title={title} description={description} />

    <p>Not Found</p>
  </>
);

export default NotFoundPage;
