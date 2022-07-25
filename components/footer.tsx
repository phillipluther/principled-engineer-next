import { VisuallyHidden } from 'react-aria';
import Padder from './padder';
import PrimaryNav from './primary-nav';
import SocialMenu from './social-menu';

const Footer = () => (
  <Padder as="footer">
    <VisuallyHidden elementType="h2">Site Footer</VisuallyHidden>

    <section>
      <VisuallyHidden elementType="h3">Supplemental Navigation</VisuallyHidden>
      <nav>
        <PrimaryNav onDark />
      </nav>
    </section>

    <section>
      <VisuallyHidden elementType="h3">Never Miss a Post!</VisuallyHidden>
      <SocialMenu onDark />
    </section>

    <section>
      <VisuallyHidden elementType="h3">Legal Information and Disclaimers</VisuallyHidden>
      <p>
        All Principled Engineer content is Copyright &copy; {new Date().getFullYear()} by Phillip
        Luther unless otherwise specified.
      </p>
      <p>
        The opinions expressed on the Principled Engineer belong to me, Phillip Luther, and do not
        necessarily reflect the views or opinions of any associated organizations or corporate
        entities.
      </p>
    </section>
  </Padder>
);

export default Footer;
