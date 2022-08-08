import { VisuallyHidden } from 'react-aria';
import Seo from '../components/seo';
import ContentHeader from '../components/content-header';
import Content from '../components/content';

const title = 'Contact';
const description =
  'On methods one might employ to contact the author and maintainer of The Principled Engineer';

const AboutPage = () => (
  <>
    <Seo title={title} description={description} />
    <ContentHeader title={title} description={description} />

    <Content>
      <VisuallyHidden elementType="h2">Contact Info for the Principled Engineer</VisuallyHidden>
      <p>
        Have a question about the blog? Need to contact me &mdash; Phil, the author &mdash; about
        something? Found a serious piece of wonk?
      </p>
      <p>Please reach out!</p>

      <h3>By Email</h3>
      <p>
        Email's the best way to get in touch with me because I'm old-fashioned like that. Drop a
        line to <a href="mailto:hello@principled.engineer">hello@principled.engineer</a>.
      </p>

      <h3>On Twitter</h3>
      <p>
        I'm not on Facebook or anything Facebook-related; I do have a Principled Engineer Twitter
        account, though! A thoughtful message to{' '}
        <a href="https://twitter.com/principledeng">@principledeng</a> works almost as well as
        email.
      </p>
    </Content>
  </>
);

export default AboutPage;
