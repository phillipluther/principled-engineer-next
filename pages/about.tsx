import Seo from '../components/seo';
import ContentHeader from '../components/content-header';
import Content from '../components/content';

const title = 'About';
const description =
  'On the particular type of topics found on this blog, the Principled Engineer, and why one might find oneself inclined to read more';

const AboutPage = () => (
  <>
    <Seo title={title} description={description} />
    <ContentHeader title={title} description={description} />

    <Content>
      <h2>About the Blog</h2>
      <p>
        The Principled Engineer is a blog about building web applications. It focuses heavily on
        modern JavaScript and the associated ecosystems. Popular topics include developer
        experience, engineering culture, and the good and ill of industry standards.
      </p>
      <p>
        The blog often explores ethics and responsibility in application engineering, too. That's
        responsibility to our users &mdash; making responsible and helpful choices for the good of
        the user, especially when those goals might run contrary to the goals of the application.
      </p>
      <p>
        As such, consider this a fair warning that things might get finger-waggy at times. The
        Principled Engineer is <a href="#author">this guy's</a> personal blog. It's editorial, not
        journalism.
      </p>

      <p>And while it make look so, fear not! Not everything on this blog reads like Dickens.</p>

      <h2 id="author">About the Author</h2>

      <p>
        My name is Phillip Luther. I go by Phil. I'm the creator of and sole contributor to the
        Principled Engineer. Any references to "I" or "me" on this site refer to me, Phillip Luther.
        Who goes by Phil. And who is the creator of and sole contributor to the Principled Engineer.
      </p>

      <p>
        Semi-related, bios are hard. Each post sports an "About the Author" blurb, though. Those'll
        have to do for now and I'll commit to building out this page as the blog grows.
      </p>
    </Content>
  </>
);

export default AboutPage;
